import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import CaseStudies from '../components/CaseStudies';
import MoreProjects from '../components/MoreProjects';
import Scroll		from '../components/Scroll'
import HeroImage	from '../assets/hero.jpg';

export default function Home(props) {
	const worksRef = useRef(null)
	const [pos, setPos] = useState(0);
	const [movement, setMovement] = useState(0);

	useEffect(() => {
		window.addEventListener('wheel', handleScroll);
		setPos(
			worksRef.current.getBoundingClientRect().y
		)
		return () => {
			window.addEventListener('wheel', handleScroll);
		};
	}, [])

	function scrollDown(){
		typeof window !== 'undefined' && window.scrollTo({ top: pos, behavior: 'smooth' })
		props.setHideMenu(true);
	}
	
	function handleScroll(e){
		setMovement(e.wheelDelta <= 0 ? 12 : 0)
	}
	
	return(
		<section className='home'>
			<div className='hero-image'>
				<img src={HeroImage} alt="hero image"
					 style={{transform: `translateY(${movement}%)`}}
				/>
			</div>
			<div className='home-landing container'>
				<div>
					<h1><span className='textBg'>Hello, </span></h1>
					<h2>my name is<span className='textBg'>Su Li</span></h2>
				</div>
				<div>
					<h4>
						<span className='textBg'>ux designer</span><span> + </span>
						<span className='textBg'>front-end engineer</span> based in Seattle.
					</h4>
					<h4>I design and build things like websites and apps</h4>
				</div>
			</div>
			<Scroll action={scrollDown}/>
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
