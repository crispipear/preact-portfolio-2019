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
					<p>Hello</p>
					<p>My name is <span className='textBg'>Su Li</span> </p>
				</div>
				<div>
					<p>
						I am a <span className='textBg'>front-end engineer</span><span> + </span>
						<span className='textBg'>ux designer</span> based in Seattle.
					</p>
					<p>I design and build things like websites and apps</p>
				</div>
			</div>
			<div className='scroll' onClick={scrollDown}>
				see my work
			</div>
			<div className='home-work container' ref={worksRef}>
				<h1 className='textBg'>case studies</h1>
				<CaseStudies caseStudies={props.caseStudies}/>
			</div>
			<div className='home-work container' style={{marginTop: '0%'}}>
				<h1 className='textBg'>more projects</h1>
				<MoreProjects projects={props.projects}/>
		    </div>
		</section>
);
}
