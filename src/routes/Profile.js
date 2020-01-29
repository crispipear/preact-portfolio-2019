import {h} from 'preact'
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
const tech = [
	'React',
    'Node.js(+Express)',
    'Firebase',
    'Vue.js'
]

export default () => {
    return (
        <section className='about'>
            <div className='about-left'>
                <img src={PROFILE} alt='profile pic'/>
                <a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com (ENG/中文)</a>
                <div>
                    {
                        links.map((l, key) => 
                            <a 	className='underline'
                                href={l.href} target='_blank' key={key}>{l.name}</a>
                        )
                    }
                </div>
            </div>
            <div className='about-right'>
                <h1>oh hi there</h1>
                <p>
                    My name is <b>Su Li</b>, a (technology x experience) enthusiast based in the Greater Seattle Area.
                </p>
                <p>I am currently working at <b>iSoftStone</b> as a <b>software engineer</b> and <b>designer</b>.</p>
                <p>Graduated from <b>University of Washington</b> in spring 2019.</p>
                <p>
                    I am passionate about developing problem-solving, human-centered and engaging experiences.
                    My work primarily focuses on <b>front-end development</b> and <b>ui/ux design</b>, I am also familiar with back-end development.
                </p>
                <div className='skills'>
                    <h2>recent tech</h2>
                    <div>
                        {
                            tech.map((skill, key) => <h3 key={key}>{skill}</h3>)
                        }
                    </div>
                </div>

                <h1>more?</h1>
                <p>
                    "fun" facts: <br/>
                    - 1st design software I used: Adobe Fireworks (elementary school)<br/>
                    - 1st coding language: Java (high school year 2) <br/>
                    - I really like KFC chicken wings<br/>
                    - I do most of my work, gaming, reading in my bed<br/>
                </p>
            </div>
        </section>
    )
}