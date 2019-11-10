import { Component } from 'preact';
import Projects from '../lib';
import { Link } from 'preact-router/match';

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
			<div className='home-work container'>
				<h1 className='textBg'>selected work</h1>
				<div className='work-container'>
					<div className='left'>
					{
						Object.keys(Projects).map((proj, key) =>
							key % 2 == 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${Projects[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{Projects[proj].name}</h1>
								<h2>{Projects[proj].context}</h2>
							</Link>
						)
					}
					</div>
					<div className='right'>
					{
						Object.keys(Projects).map((proj, key) => 
							key % 2 !== 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${Projects[proj].cover_v || Projects[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{Projects[proj].name}</h1>
								<h2>{Projects[proj].context}</h2>
							</Link>
						)
					}
					</div>
				</div>
			</div>
		</section>
		)
	}
}
export default Home;
