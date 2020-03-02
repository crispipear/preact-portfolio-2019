import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import CaseStudies from '../components/CaseStudies';
import MoreProjects from '../components/MoreProjects';

export default function Home(props) {
	const worksRef = useRef(null)
	const [pos, setPos] = useState(0);

	useEffect(() => {
		setPos(
			worksRef.current.getBoundingClientRect().y
		)
	}, [])

	function scrollDown(){
		typeof window !== 'undefined' && window.scrollTo({ top: pos, behavior: 'smooth' })
		props.setHideMenu(true);
	}
	return(
		<section className='home'>
			<div className='home-landing container'>
				<div><h1>syl</h1></div>
				<div>
					<h4>Hello</h4>
					<h4>My name is <span className='textBg'>Su Li</span> </h4>
				</div>
				<div>
					<h4>
						I am a <span className='textBg'>front-end engineer</span><span> + </span>
						<span className='textBg'>ux designer</span> based in Seattle.
					</h4>
					<h4>I design and build things like websites and apps</h4>
				</div>
			</div>
			<div className='scroll' onClick={scrollDown}>
				<div className='scroll-text'>see my work</div>
				<div className='scroll-line'/>
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
