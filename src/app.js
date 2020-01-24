import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';

import Menu 		from './components/Menu';
import LoadScreen	from './components/LoadScreen';
import Footer 		from './components/Footer';

import Home 		from './routes/Home';
import Profile		from './routes/Profile';
import Journi		from './routes/projects/Journi';
import Unarchived	from './routes/projects/Unarchived';

export default function App(){
	const [menuOpacity, setMenuOpacity] = useState(1);
	const [currentUrl, setCurrentUrl] = useState("/");

	useEffect(() => {
		setCurrentUrl(window.location.pathname)
	}, [])

	function handleRoute(e){
		scrollTop();
		setCurrentUrl(e.url);
	}

	function scrollTop(){
		typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })
		setMenuOpacity(1)
	}

	return(
		<div id="app">
			{/* {
				!loaded && <LoadScreen/>
			} */}
			<Menu currentUrl={currentUrl} menuOpacity={menuOpacity} setMenuOpacity={setMenuOpacity}/>
			<Router onChange={handleRoute}>
				<Home path="/" setMenuOpacity={setMenuOpacity}/>
				<Profile path="/profile"/>
				<Journi path="/projects/journi"/>
				<Unarchived path="/projects/unarchived"/>
			</Router>
			{
				currentUrl !== '/profile' &&
				<Footer scrollTop={scrollTop}/>
			}
		</div>
	)
}
