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
	'JavaScript',
	'React(+Native)',
	'HTML/CSS(+SCSS)',
	'Node.js(+Express)',
	'Redux',
	'Mocha(+Chai)',
	'GCP + Firebase'
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
                    I’m Su Li, <b>UX + Software Engineer</b> based in the Greater Seattle Area.
                </p>
                <p>Currently at <b>iSoftStone North America</b> as a <b>Boeing</b> supplier.</p>
                <p>Graduated from <b>University of Washington</b> in spring 2019.</p>

                <h1>what I do</h1>
                <p>
                    My primary focuses are <b>Front-end development</b> (sometimes back-end too) and <b>UI/UX design</b>.
                    I am passionate about developing problem-solving, user-oriented products and engaging experiences.
                </p>
                <div className='skills'>
                    <h2>recent stack</h2>
                    <div>
                        {
                            tech.map((skill, key) => <h3 key={key}>{skill}</h3>)
                        }
                    </div>
                </div>
                <p>Send me an email if you got more questions :)</p>
            </div>
        </section>
    )
}