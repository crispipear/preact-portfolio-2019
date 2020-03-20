import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import CaseStudies from '../components/CaseStudies';
import MoreProjects from '../components/MoreProjects';
import Scroll		from '../components/Scroll'
import Hero			from '../components/Hero';
import Fade			from '../components/Fade';
import COLLAB		from '../assets/collab.svg';

export default function Home(props) {
	const worksRef = useRef(null)
	const [movement, setMovement] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		props.setWorkPos(worksRef.current.getBoundingClientRect().y)
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [])

	function handleScroll(){
		let value = window.pageYOffset * 0.06;
		setMovement(value);
	}
	return(
		<section className='home'>
			<Hero/>
			<div className='home-landing'>
				<div className='container' style={{transform: `translateY(${movement}%)`}}>
						<div>
							<Fade delay={1000}><h1><span className='textBg'>Hello, </span></h1></Fade>
							<Fade delay={1250}><h2>my name is<span className='textBg'>Su Li</span></h2></Fade>
						</div>
						<Fade duration={1000} delay={1750}>
							<h4>
								<span className='textBg'>ux designer</span><span> + </span>
								<span className='textBg'>front-end developer</span> based in Seattle.
							</h4>
						</Fade>
						<Fade duration={1000} delay={2000}><h4>I design and build things like websites and apps</h4></Fade>
				</div>
				<Scroll action={props.scrollToWork}/>
			</div>
			<div className='home-work container' ref={worksRef}>
				<h3><span className='textBg'>case studies</span></h3>
				<CaseStudies caseStudies={props.caseStudies}/>
			</div>
			<div className='home-work container' style={{marginTop: '0%'}}>
				<h3><span className='textBg'>more projects</span></h3>
				<MoreProjects projects={props.projects}/>
		    </div>
			<div className='home-collab container'>
				<Fade bottom>
					<div>
						<img src={COLLAB} alt="collab image"/>
					</div>
				</Fade>
				<Fade delay={200}>
					<div>
						<h2><span className='textBg'>collaboration can make things better</span></h2>
						<p>My inbox is always opened. Feel free to reach out to me if you have a potential project in mind or need some consultation in my area of expertise!</p>
						<h4><a href='mailto:lisuy97@gmail.com' className='underline'>say hello</a></h4>
					</div>
				</Fade>
			</div>
		</section>
);
}