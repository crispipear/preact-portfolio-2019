import { h } from 'preact';
import { Link } from 'preact-router/match';

const Menu = () => {
	return (
		<div className='menu'>
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
export default Menu;

