import { Component } from 'preact';
import PROFILE from '../assets/profile.png';
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
const skills=[
	{
		name: 'tech skills',
		list: ['JavaScript', 'HTML/CSS (+SCSS)', 'React (+Native)', 'Redux', 'Node.js', 'Vue']
	},
	{
		name: 'experience',
		list: ['front-end/web development', 'mobile app development', 'ui/ux/web design', 'video production', 'motion design']
	}
]
class About extends Component {
	render() {
		return (
			<section className='about'>
				<div className='about-left'>
					<img src={PROFILE} alt='profile pic'/>
					<a href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com (ENG/中文)</a>
					<div>
						{
							links.map((l, key) => 
								<a href={l.href} target='_blank' key={key}>{l.name}</a>
							)
						}
					</div>
				</div>
				<div className='about-right'>
					<h1>Hello, I'm Su</h1>
					<p>
						I’m a <b>software engineer</b> based in the Greater Seattle Area specialize in <b>front-end development</b> and <b>ui/ux design</b>. 
						I am passionate about developing efficient, user-oriented products and engaging experiences.
					</p>
					<p>
						Currently at <b>iSoftStone North America</b>, working on app development, ui/ux design and IoT network visualization for <b>Boeing</b>.
					</p>
					<p>I am also a 2019 graduate from <b>University of Washington</b> in 
					<a href='https://uwbimd2019.com' target='_blank'>interactive media design</a>.</p>
					<div className='skills'>
						{
							skills.map((s, key) => 
								<div key={key} className='skill-block'>
									<h2>{s.name}</h2>
									{
										s.list.map((item, key) => 
											<p key={key}>{item}</p>
										)
									}
								</div>
							)
						}
					</div>
				</div>
			</section>
		)
	}
}
export default About;
