import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

export default function Home(props) {
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
			<div className='scroll'>
				scroll
			</div>
			<div className='home-work container'>
				<h1 className='textBg'>selected work</h1>
				<div className='work-container'>
					<div className='left'>
					{
						Object.keys(props.overview).map((proj, key) =>
							key % 2 == 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${props.overview[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{props.overview[proj].name}</h1>
								<h2>{props.overview[proj].context}</h2>
							</Link>
						)
					}
					</div>
					<div className='right'>
					{
						Object.keys(props.overview).map((proj, key) => 
							key % 2 !== 0 &&
							<Link key={proj} className='work-item' href={`/projects/${proj}`}>
								<div className='work-cover'>
									<div style={{backgroundImage: `url(${props.overview[proj].cover_v || props.overview[proj].cover})`}}/>
								</div>
								<h1 className='textBg'>{props.overview[proj].name}</h1>
								<h2>{props.overview[proj].context}</h2>
							</Link>
						)
					}
					</div>
				</div>
			</div>
		</section>
);
}
