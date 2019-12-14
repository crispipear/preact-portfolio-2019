import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';

import ProjectsData 	from './lib/project-overview';
import ProjectContent   from './lib/project-content';

import Menu 		from './components/Menu';
import LoadScreen	from './components/LoadScreen';
import Home 		from './routes/Home';
import Profile		from './routes/Profile';
import Projects		from './routes/Projects';


export default function App(){
	const [currentUrl, setCurrentUrl] = useState("/")
	const [projData, setProjectData] = useState({overview: [], content: {}})

	useEffect(() => {
		setCurrentUrl(window.location.pathname)
		setProjectData({
			overview: ProjectsData,
			content: ProjectContent
		})
	}, [])

	function handleRoute(e){
		typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })
		setCurrentUrl(e.url)
	}

	return(
		<div id="app">
			{/* {
				!loaded && <LoadScreen/>
			} */}
			<Menu currentUrl={currentUrl}/>
			<Router onChange={handleRoute}>
				<Home path="/" overview={projData.overview}/>
				<Profile path="/profile"/>
				<Projects path="/projects/:projectName" overview={projData.overview} content={projData.content}/>
			</Router>
		</div>
	)
}
