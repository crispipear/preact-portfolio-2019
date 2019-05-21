import { Component } from 'preact';
import Projects from '../lib';

class Home extends Component{
	state={
		curProj: 'smartcabin'
	}
	render(){
		return(
		<section className='home'>
			<div className='container'>
				<div className='home-image'>
					{
						Object.keys(Projects).map((proj, key) =>
							<img key={key} alt="project photo" src={Projects[proj].cover}
								 style={{
									 opacity: this.state.curProj == proj ? 1 : 0
								 }}
							/>
						)
					}	
				</div>
				<div className='home-titles'>
					{
						Object.keys(Projects).map((proj, key) =>
							<div className='home-title' key={key}>
								<h1>{Projects[proj].name}</h1>
							</div>
						)
					}	
				</div>	
			</div>
		</section>
		)
	}
}
export default Home;
