import { h } from 'preact';
import {useEffect, useState} from 'preact/hooks';
import { Link } from 'preact-router/match';

export default function Menu(props) {
	useEffect(() => {
		window.addEventListener('wheel', handleScroll)
		return () => window.removeEventListener('wheel', handleScroll);
	})

	function handleScroll(e){
		if(props.currentUrl !== '/profile'){
			if (e.wheelDelta <= 0) {
				props.menuOpacity == 1 && props.setMenuOpacity(0)
			} else {
				props.menuOpacity == 0 && props.setMenuOpacity(1)
			}
		}
	}

	return (
		<div className='menu' style={{opacity: props.menuOpacity}}>
			<div className='container'>
				<div className='menu-logo'>
					<Link href='/'><b>su li</b> | ux + software engineer</Link>
				</div>
				<div className='menu-links'>
					<Link className='link-bg' href='/'>work</Link>
					<Link className='link-bg' href='/profile'>profile</Link>
				</div>
			</div>
		</div>
	)
}

