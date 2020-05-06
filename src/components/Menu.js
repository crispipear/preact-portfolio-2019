import { h } from 'preact';
import {useEffect, useState} from 'preact/hooks';
import { Link } from 'preact-router/match';
import MENU_ICON	from '../assets/icon_menu.svg';
import CLOSE_ICON	from '../assets/icon_close.svg';

export default function Menu(props) {
	const [menuOpacity, setMenuOpacity] = useState(0);
	const [menuPos, setMenuPos] = useState(-60);
	const [atTop, setAtTop] = useState(true);
	const [menuClass, setMenuClass] = useState('menu menu-no-background');
	const [mobileMenu, setMobileMenu] = useState(false);

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
		if(window.innerWidth <= 1023){
			setMobileMenu(false);
		}
	}, [props.currentUrl])

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

	function scroll(){
		if(props.currentUrl !== '/'){
			setTimeout(props.scrollToWork, 500);
		}else{
			props.scrollToWork();
		}
	}

	return (
		<div className={menuClass} style={{opacity: menuOpacity, transform: `translateY(${menuPos}px)`}}>
			<div className='container'>
				<div className='menu-logo'>
					<Link className='link-bg' href='/'><b>su li</b> | developer + designer</Link>
				</div>
				{
					window.innerWidth >= 1023 ?
					<div className='menu-links'>
						<Link className='link-bg' href='/' onClick={scroll}>work</Link>
						<Link className='link-bg' href='/profile'>profile</Link>
					</div>
					:
					<div id="mobile-menu-right" onClick={() => setMobileMenu(true)}>
						<img src={MENU_ICON}/>
					</div>
				}
			</div>
			{
				window.innerWidth <= 1023 &&
				<div id="mobile-menu" style={{opacity: mobileMenu ? 1 : 0, pointerEvents: mobileMenu ? 'all' : 'none'}}>
					<div id="mobile-menu-close" onClick={() => setMobileMenu(false)}>
						<img src={CLOSE_ICON}/>
					</div>
					<Link href='/' onClick={props.scrollToWork}>work</Link>
					<Link href='/profile'>profile</Link>
				</div>
			}
		</div>
	)
}

