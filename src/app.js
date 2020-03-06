import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import {fetchData, fetchOrderData} from './utils/prismic';
import {processPage, processData} from './utils/formatData';

import Menu 		from './components/Menu';
// import LoadScreen	from './components/LoadScreen';
import Footer 		from './components/Footer';

import Error	    from './routes/Error';
import Home 		from './routes/Home';
import Profile		from './routes/Profile';
import CSView		from './routes/CSView';

export default function App(){
	const [hideMenu, setHideMenu] = useState(false);
	const [currentUrl, setCurrentUrl] = useState("/");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [caseStudies, setCaseStudies] = useState([]);
	const [profile, setProfile] = useState({});
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
		initData().then(()=>{
			setIsLoading(false);
		})
		// setIsLoading(false);
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
		scrollTop(false);
		setCurrentUrl(e.url);
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

	return(
		<div id="app">
			{/* {
				isLoading && <LoadScreen/>
			} */}
			<Menu currentUrl={currentUrl} hideMenu={hideMenu} setHideMenu={setHideMenu} error={error}/>
			{
				!isLoading &&
				<Router onChange={handleRoute}>
					<Home path="/" setHideMenu={setHideMenu} caseStudies={caseStudies} projects={projects}/>
					<Profile path="/profile" profile={profile}/>
					<CSView path="/case-studies/:id" caseStudies={caseStudies}/>
					<Error type="404" default error/>
				</Router>
			}
			{
				(currentUrl !== '/profile' && !error) &&
				<Footer scrollTop={scrollTop}/>
			}
		</div>
	)
}
