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

const skills = ['JavaScript', 'React', 'Redux', 'jQuery', 'HTML', 'CSS/SCSS', 'Express', 'Node.js']

class About extends Component {
	render() {
		return (
			<section className='about'>
				<div className='container'>
					<div className='about-intro'>
						<div className='about-profile' style={{backgroundImage: `url(${PROFILE})`}}/>
						<h1>Hi there!
							<br />My name is Su Li (李素莹).
						</h1>
					</div>
					<div className='about-content'>
						<p>I am a <span>Software Engineer</span> based in the Greater Seattle Area specialized in
							<span> front-end development</span> and <span>ux design</span>. I design and build things like 
							websites and apps.</p>
						<p>
							Currently at <span>iSoftStone North America</span>, working on applications development,
							ui/ux design and IoT network visualization for <span>Boeing</span>.
							I am also graduating in June from <span>University of Washington </span>
							with a degree in <span>interactive media design</span>.
						</p>
						<p>
							I am passionate about developing efficient, user-oriented products and engaging experiences.
							Technology is what inspired me to shift from visual design to ux design and development.
						</p>
						<div className='about-content-block'>
							<p>Some technologies that I work with —</p>
							<div>
								{
									skills.map((skill, key) => <span key={key}>{skill}</span>)
								}
							</div>
						</div>
						<div className='about-content-block'>
							<p>Find me on —</p>
							<div>
								{
									links.map((link, key) => 
									<div key={key}>
										<a href={link.href} target='_blank'>{link.name}</a>
									</div>
									)
								}
							</div>
						</div>
						<p>
							Got more questions or wanna chat? Email me at <a href='mailto:lisuy97@gmai.com'>lisuy97@gmail.com</a>
						</p>
					</div>
				</div>
			</section>
		)
	}
}
export default About;