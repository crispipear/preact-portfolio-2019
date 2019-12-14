import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';

export default function Projects(props) {
    const [project, setProject] = useState({})
    const [content, setContent] = useState([])

    useEffect(() => {
        if(props.matches.projectName == "/"){
            setTimeout(() => {
                route('/')
            }, 1000)
        }else{
            setProject(props.overview[props.matches.projectName])
            setContent(props.content[props.matches.projectName])
        }
    }, [])

    return (
        <div className='project container'>
            <div className='header'>
                <div className='header-left'>
                    <div className='header-title'>
                        <h2>{project.context}</h2>
                        <h1>{project.name}</h1>
                    </div>
                    <div className='header-img' style={{backgroundImage: `url(${project.cover})`}}/>
                </div>
                <div className='header-right'>
                    <div className='header-info'>
                        <h3>year</h3><h2>{project.year}</h2>
                        <h3>tools</h3><h2>{project.tools}</h2>
                        <h3>role</h3><h2>{project.role}</h2>
                    </div>
                    {
                        project.website &&
                        <a href={project.website} target="_blank" className='underline'>visit website</a>
                    }
                </div>
            </div>
            <div className='body'>
                    {content}
            </div>
        </div>
    );
}