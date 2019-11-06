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
			<div className='home-landing container'>
				<div><h1>syl</h1></div>
				<div>
					<p>Hello</p>
					<p>My name is <span className='textBg'>Su Li</span> </p>
				</div>
				<div>
					<p>
						I am a <span className='textBg'>software engineer</span><span> + </span>
						<span className='textBg'>ux designer</span>
					</p>
					<p>I design and build things like websites and apps</p>
				</div>
			</div>
			<div className='scroll'>
				scroll
			</div>
		</section>
		)
	}
}
export default Home;
