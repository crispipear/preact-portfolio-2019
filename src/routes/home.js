import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import Overview from '../lib/project-overview';

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
		props.setMenuOpacity(0);
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
						I am a <span className='textBg'>software engineer</span><span> + </span>
						<span className='textBg'>ux designer</span>
					</p>
					<p>I design and build things like websites and apps</p>
				</div>
			</div>
			<div className='scroll' onClick={scrollDown}>
				scroll
			</div>
			<div className='home-work container' ref={worksRef}>
				<h1 className='textBg'>selected work</h1>
				<div className='work-container'>
					<div className='left'>
					{
						Object.keys(Overview).map((proj, key) =>
							key % 2 == 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${Overview[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{Overview[proj].name}</h1>
								<h2>{Overview[proj].context}</h2>
							</Link>
						)
					}
					</div>
					<div className='right'>
					{
						Object.keys(Overview).map((proj, key) => 
							key % 2 !== 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${Overview[proj].cover_v || Overview[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{Overview[proj].name}</h1>
								<h2>{Overview[proj].context}</h2>
							</Link>
						)
					}
					</div>
				</div>
			</div>
		</section>
);
}
