import { Component } from 'preact';
import Work from '../components/Work';

const links = [
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/suyingli/'
	},
	{
		name: 'Dribbble',
		href: 'https://dribbble.com/crispipear'
	},
	{
		name: 'Codepen',
		href: 'https://codepen.io/crispipear/'
	},
	{
		name: 'Github',
		href: 'https://github.com/crispipear'
	}
]

class Home extends Component{
	render(){
		return(
		<section className='home'>
			<div className='home-landing'>
				<div className='home-landing-left'>
					<h1>syl</h1>
				</div>
				<div className='home-landing-right'>
					<p>Hello, my name is Su Li</p>
					<p>software engineer + ux designer + hobbyist videographer</p>
					<p>I design and build things like apps and websites</p>
					<p>my site is under construction right now, come back soon!</p>
					<div className='home-links'>
					{
						links.map((l, key) => 
							<a style={{marginRight: 12}} href={l.href} target='_blank' key={key}>{l.name}</a>
						)
					}
					</div>
				</div>
				{/* <div className='scroll'>
					<span>scroll</span>
				</div> */}
			</div>
			{/* <Work/> */}
		</section>
		)
	}
}
export default Home;
