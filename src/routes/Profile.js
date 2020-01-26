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
	'React(+Native)',
	'Node.js(+Express)',
	'Redux',
	'Firebase'
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
                    My name is <b>Su Li</b>. I'm a <b>Software Engineer</b> and <b>UX Designer</b> based in the Greater Seattle Area.
                </p>
                <p>Currently at <b>iSoftStone North America</b> as a <b>Boeing</b> supplier.</p>
                <p>Graduated from <b>University of Washington</b> in spring 2019.</p>

                <h1>what I do</h1>
                <p>
                    My primary focuses are <b>Front-end development</b> (+some back-end dev) and <b>UI/UX design</b>.
                    I am passionate about developing problem-solving, user-oriented products and creating engaging experiences.
                </p>
                <div className='skills'>
                    <h2>recent stack</h2>
                    <div>
                        {
                            tech.map((skill, key) => <h3 key={key}>{skill}</h3>)
                        }
                    </div>
                </div>

                <h1>more?</h1>
                <p>
                    My favorite things to do off work includes: <br/>
                    - Binge-reading in my bed. <br/>
                    - Binge-watching in my bed. <br/>
                    - Play games in my bed. <br/>
                    - Experiment with new recipes when I done being in my bed. <br/>
                </p>
            </div>
        </section>
    )
}