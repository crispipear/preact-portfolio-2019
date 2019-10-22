import { Component } from 'preact';
import Work from '../components/Work';

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
				</div>
				{/* <div className='shape-left'/>
				<div className='shape-right'/> */}
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
