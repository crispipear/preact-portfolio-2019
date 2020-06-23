const links = {
	LinkedIn: 'https://www.linkedin.com/in/suyingli/',
	Dribbble: 'https://dribbble.com/crispipear',
	CodePen: 'https://codepen.io/crispipear/',
	Github: 'https://github.com/crispipear',
	Contact: 'mailto:lisuy97@gmail.com'
}

export default function App(){
	return(
		<div id="app">
			<span>&#127959;</span>
			<h1>Hello! This is Su, thanks for visiting.</h1>
			<p>My portfolio site is currently under construction, please come back soon. &#128513;</p>
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
