import { Component } from 'preact';
import { Link } from 'preact-router/match';
import LOGO from '../assets/logo.png';

class Menu extends Component {
	render() {
		return (
			<div className='menu'>
				<div className='container'>
					<div className='menu-logo'>
						<Link href='/'><img src={LOGO} alt='logo image'/></Link>
					</div>
					<div className='menu-links'>
						<Link href='/'>work</Link>
						<Link href='/about'>about</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default Menu;
