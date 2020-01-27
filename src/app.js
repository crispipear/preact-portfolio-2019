import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import { fetchData } from './utils/ctf';

import Menu 		from './components/Menu';
import LoadScreen	from './components/LoadScreen';
import Footer 		from './components/Footer';

import Home 		from './routes/Home';
import Profile		from './routes/Profile';
// import Journi		from './routes/projects/Journi';
// import Unarchived	from './routes/projects/Unarchived';

export default function App(){
	const [menuOpacity, setMenuOpacity] = useState(1);
	const [currentUrl, setCurrentUrl] = useState("/");
	const [isLoading, setIsLoading] = useState(true);
	const [caseStudies, setCaseStudies] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
		initData();
		// setIsLoading(false);
	}, [])
	
	async function initData(){
		const caseStudies = await fetchData('caseStudies');
		setCaseStudies(caseStudies);
		const projects = await fetchData('projects');
		projects.sort(sortByNum)
		setProjects(projects);
	}

	function sortByNum(itemA, itemB) {
		let a = itemA.orderId || 100;
		let b = itemB.orderId || 100;
		return a > b ? 1 : b > a ? -1 : 0;
	}

	function handleRoute(e){
		scrollTop(false);
		setCurrentUrl(e.url);
		// setIsLoading(true);
		// setTimeout(() => {
		// 	setIsLoading(false);
		// }, 1000)
	}
	function scrollTop(smooth = true){
		if (typeof window !== 'undefined'){
			smooth
			?
			window.scrollTo({ top: 0, behavior: 'smooth' })
			:
			window.scrollTo({ top: 0 })
		}
		setMenuOpacity(1)
	}

	return(
		<div id="app">
			{/* {
				isLoading && <LoadScreen/>
			} */}
			<Menu currentUrl={currentUrl} menuOpacity={menuOpacity} setMenuOpacity={setMenuOpacity}/>
			<Router onChange={handleRoute}>
				<Home path="/" setMenuOpacity={setMenuOpacity} caseStudies={caseStudies} projects={projects}/>
				<Profile path="/profile"/>
				{/* <Journi path="/projects/journi"/>
				<Unarchived path="/projects/unarchived"/> */}
			</Router>
			{
				currentUrl !== '/profile' &&
				<Footer scrollTop={scrollTop}/>
			}
		</div>
	)
}
