import { h } from 'preact';
// import { Link } from 'preact-router/match';

// icons
import ICON_LINKEDIN from '../assets/icons/links_linkedin.png';
import ICON_GITHUB from '../assets/icons/links_github.png';
import ICON_DRIBBBLE from '../assets/icons/links_dribbble.png';
import ICON_CODEPEN from '../assets/icons/links_codepen.png';

const links = [
	{
	  icon: ICON_LINKEDIN,
	  name: 'linkedin',
	  href: 'https://linkedin.com/in/suyingli/'
	},
	{
	  icon: ICON_DRIBBBLE,
	  name: 'dribbble',
	  href: 'https://dribbble.com/crispipear'
	},
	{
	  icon: ICON_CODEPEN,
	  name: 'codepen',
	  href: 'https://codepen.io/crispipear/'
	},
	{
	  icon: ICON_GITHUB,
	  name: 'github',
	  href: 'https://github.com/crispipear'
	}
  ]

const Home = () => (
	<div className='home'>
		<div className='content'>
			<h1>su li</h1>
			<p>I am a <span>software engineer</span> based in the greater seattle area specialized in
			<span> front-end development</span> and <span>ux design</span>.</p>
			<p>My site is currently under construction, come back soon!</p>
			<div className='links'>
				{
					links.map((link, key) => 
						<a href={link.href} target="blank" key={key}>
							{link.name}
						</a>
					)
				}
			</div>
		</div>
	</div>
);

export default Home;
