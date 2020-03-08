import { h } from 'preact';
import {useEffect, useState} from 'preact/hooks';
import { Link } from 'preact-router/match';

export default function Menu(props) {
	const [menuOpacity, setMenuOpacity] = useState(0);
	const [menuPos, setMenuPos] = useState(-60);
	const [atTop, setAtTop] = useState(true);
	const [menuClass, setMenuClass] = useState('menu menu-no-background')

	useEffect(() => {
		window.addEventListener('wheel', handleScroll)
		return () => window.removeEventListener('wheel', handleScroll);
	}, [])

	function handleScroll(e){
		if(props.currentUrl !== '/profile' && !props.error){
			if (e.wheelDelta <= 0) {
				//content goes down
				props.setHideMenu(true);
			} else {
				//content goes up
				props.setHideMenu(false);
			}
		}
		if(window.pageYOffset <= window.innerHeight){
			setAtTop(true)
		}else{
			setAtTop(false)
		}
	}

	useEffect(() => {
		if(atTop){
			setMenuClass('menu menu-no-background');
		}else{
			setMenuClass('menu menu-background')
		}
	}, [atTop])

	function showMenu(){
		setMenuOpacity(1);
		setMenuPos(0);
	}

	function hideMenu(){
		setMenuOpacity(0);
		setMenuPos(-60);
	}

	useEffect(() => {
		if(props.hideMenu == true){
			hideMenu();
		}else{
			showMenu();
		}
	}, [props.hideMenu])

	return (
		<div className={menuClass} style={{opacity: menuOpacity, transform: `translateY(${menuPos}px)`}}>
			<div className='container'>
				<div className='menu-logo'>
					<Link className='link-bg' href='/'><b>su li</b> | designer + developer</Link>
				</div>
				<div className='menu-links'>
					<Link className='link-bg' href='/work'>work</Link>
					<Link className='link-bg' href='/profile'>profile</Link>
				</div>
			</div>
		</div>
	)
}

