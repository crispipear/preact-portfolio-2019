import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const links = {
	LinkedIn: 'https://www.linkedin.com/in/suyingli/',
	Dribbble: 'https://dribbble.com/crispipear',
	CodePen: 'https://codepen.io/crispipear/',
	Github: 'https://github.com/crispipear'
}

export default function App(){
	return(
		<div id="app">
			<h1>&#127959;</h1>
			<p>Hello! This is Su, thanks for visiting.</p>
			<p>My portfolio is currently under construction, please come back soon. &#128513;</p>
			<p>
				{
					Object.keys(links).map((linkName, key) =>
						<a 
							className="underline"
							style={{
								marginLeft: key !== 0 ? '8px' : '0px'
							}}
							key={linkName}
							href={links[linkName]}>
								{linkName}
						</a>	
					)
				}
			</p>
		</div>
	)
}
