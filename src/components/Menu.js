import { Component } from 'preact';
import { Link } from 'preact-router/match';
import LOGO from '../assets/logo.png';

class Menu extends Component {
	render() {
		return (
			<div className='menu'>
				<div className='container'>
					<div className='menu-logo'>
						<Link href='/'><b>su li</b> | ux + software engineer</Link>
					</div>
					<div className='menu-links'>
						<Link className='link-bg' href='/'>work</Link>
						<Link className='link-bg' href='/about'>profile</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default Menu;
