import { Component } from 'preact';
import { Link } from 'preact-router/match';
import LOGO from '../assets/logo.png';

class Menu extends Component {
	render() {
		return (
			<div className='menu'>
				<div className='container'>
					<div className='menu-logo'>
						<img src={LOGO} alt='logo image'/>
						<span><Link href='/'>su li</Link></span>
					</div>
					<div className='menu-links'>
						{
							this.props.currentUrl == "/" &&
							<Link href='/about'>about</Link>
						}
						{
							this.props.currentUrl == "/about" &&
							<Link href='/'>home</Link>
						}
						{
							this.props.currentUrl.startsWith("/projects") &&
							<Link href='/about'>about</Link>
						}
						{
							this.props.currentUrl.startsWith("/projects") &&
							<Link href='/'>home</Link>
						}
					</div>
				</div>
			</div>
		)
	}
}
export default Menu;
