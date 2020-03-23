import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import {fetchData, fetchOrderData} from './utils/prismic';
import {processPage, processData} from './utils/formatData';

import Menu 		from './components/Menu';
import LoadScreen	from './components/LoadScreen';
import Footer 		from './components/Footer';

import Error	    from './routes/Error';
import Home 		from './routes/Main';
import Profile		from './routes/Profile';
import CSView		from './routes/CSView';

export default function App(){
	const [hideMenu, setHideMenu] = useState(true);
	const [currentUrl, setCurrentUrl] = useState("/");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [caseStudies, setCaseStudies] = useState([]);
	const [profile, setProfile] = useState({});
	const [projects, setProjects] = useState([]);
	const [workPos, setWorkPos] = useState(0);

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
		initData().then(()=>{
			setTimeout(() => {
				setIsLoading(false);
				setTimeout(() => setHideMenu(false),3000);
			}, 1250)
		})
	}, [])
	
	async function initData(){
		const profile = await fetchData('profile');
		setProfile(processPage(profile))
		const caseStudies = await fetchOrderData('case_study', '[my.case_study.order]');
		setCaseStudies(processData(caseStudies))
		let projects = await fetchData('project');
		projects = processData(projects);
		projects.sort(sortByNum);
		setProjects(projects);
	}

	function sortByNum(itemA, itemB) {
		let a = itemA.order_id || 100;
		let b = itemB.order_id || 100;
		return a > b ? 1 : b > a ? -1 : 0;
	}

	function handleRoute(e){
		setCurrentUrl(e.url);
		if(e.url !== '/'){
			scrollTop(false);
		}
		if(e.current.props.error){
			setError(true)
		}else{
			setError(false)
		}

	}
	function scrollTop(smooth = true){
		if (typeof window !== 'undefined'){
			smooth
			?
			window.scrollTo({ top: 0, behavior: 'smooth' })
			:
			window.scrollTo({ top: 0 })
		}
		setHideMenu(false)
	}

	function scrollToWork(){
		typeof window !== 'undefined' && window.scrollTo({ top: workPos, behavior: 'smooth' })
		setHideMenu(true);
	}

	return(
		<div id="app">
			<LoadScreen isLoading={isLoading}/>
			{
				!isLoading && 
				<Menu currentUrl={currentUrl} hideMenu={hideMenu} setHideMenu={setHideMenu} error={error} scrollToWork={scrollToWork}/>
			}
			{
				!isLoading &&
				<Router onChange={handleRoute}>
					<Error type="404" default />
					<Home path="/" setWorkPos={setWorkPos} setHideMenu={setHideMenu} caseStudies={caseStudies} projects={projects} scrollToWork={scrollToWork}/>
					<Profile path="/profile" profile={profile}/>
					<CSView path="/case-studies/:id" caseStudies={caseStudies} key={currentUrl}/>
				</Router>
			}
			{
				(currentUrl !== '/profile' && !error && !isLoading) &&
				<Footer scrollTop={scrollTop}/>
			}
		</div>
	)
}
