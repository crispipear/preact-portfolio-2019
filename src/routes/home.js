import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import CaseStudies from '../components/CaseStudies';
import MoreProjects from '../components/MoreProjects';
import Scroll		from '../components/Scroll'
import Hero			from '../components/Hero';
import Fade			from '../components/Fade';

export default function Home(props) {
	const worksRef = useRef(null)
	const [pos, setPos] = useState(0);
	const [movement, setMovement] = useState(0);
	const [movement2, setMovement2] = useState(0);

	useEffect(() => {
		setPos(worksRef.current.getBoundingClientRect().y);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [])

	useEffect(() => {
		if(props.matches.scroll == 'work'){
			scrollDown(false);
		}
	}, [pos])

	function handleScroll(){
		let value = -(window.pageYOffset * 0.02);
		let value2 = window.pageYOffset * 0.04;
		setMovement(value);
		setMovement2(value2);
	}
	function scrollDown(smooth = true){
		if (typeof window !== 'undefined'){
			smooth
			?
			window.scrollTo({ top: pos, behavior: 'smooth' })
			:
			window.scrollTo({ top: pos })
		}
		props.setHideMenu(true);
	}
	return(
		<section className='home'>
			<Hero/>
			<div className='home-landing'>
				<div className='container'>
					<div style={{transform: `translateY(${movement}%)`}}>
						<Fade bottom duration={1000} delay={1250}><h1><span className='textBg'>Hello, </span></h1></Fade>
						<Fade bottom duration={1000} delay={1750}><h2>my name is<span className='textBg'>Su Li</span></h2></Fade>
					</div>
					<div style={{transform: `translateY(${movement2}%)`}}>
						<Fade duration={1000} delay={2250}><h4>
							<span className='textBg'>ux designer</span><span> + </span>
							<span className='textBg'>front-end developer</span> based in Seattle.
						</h4></Fade>
						<Fade duration={1000} delay={2750}><h4>I design and build things like websites and apps</h4></Fade>
					</div>
				</div>
				<Scroll action={scrollDown}/>
			</div>
			<div className='home-work container' ref={worksRef}>
				<h3><span className='textBg'>case studies</span></h3>
				<CaseStudies caseStudies={props.caseStudies}/>
			</div>
			<div className='home-work container' style={{marginTop: '0%'}}>
				<h3><span className='textBg'>more projects</span></h3>
				<MoreProjects projects={props.projects}/>
		    </div>
		</section>
);
}
