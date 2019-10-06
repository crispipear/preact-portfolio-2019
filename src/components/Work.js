import { Component } from 'preact';
import Projects from '../lib';
import { Link } from 'preact-router/match';

class Work extends Component{
    componentDidMount(){
        console.log(Projects)
    }
	render(){
        const proj = Projects.unarchived
		return(
			<div className='work container'>
                    <h1>selected works</h1>
                    {
                        Object.keys(Projects).map((proj, key) =>
                            <Link href={`/projects/${proj}`}
                                className='work-item no-underline' key={key}
                            >
                                <div className='work-item-img' style={{backgroundImage: `url(${Projects[proj].cover})`}}/>
                                <div className='work-item-info'>
                                    <p>0{key+1} <span>{Projects[proj].context}</span></p>
                                    <h2>{Projects[proj].name}</h2>
                                </div>
                            </Link>
                        )
                    }
            </div>
		)
	}
}
export default Work;
