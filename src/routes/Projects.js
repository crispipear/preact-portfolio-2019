import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import { route } from 'preact-router';

export default function Projects(props) {
    const [project, setProject] = useState({})
    const [content, setContent] = useState([])
    const [next, setNext] = useState({})
    const [nextRoute, setNextRoute] = useState("")

    useEffect(() => {
        initProject()
    }, [props.matches.projectName])

    useEffect(() => {
        initProject()
    }, [])

    function initProject(){
        let projName = props.matches.projectName
        if(projName == "/"){
            setTimeout(() => {
                route('/')
            }, 1000)
        }else{
            setProject(props.overview[projName])
            setContent(props.content[projName])
            let keys = Object.keys(props.overview);
            let nextIndex = keys.indexOf(projName) +1;
            if(nextIndex >= keys.length) nextIndex = 0;
            let nextItem = keys[nextIndex];
            setNextRoute(nextItem);
            setNext(props.overview[nextItem]);
        }
    }

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
            <Link className='proj-end' href={"/projects/" + nextRoute}>
                <h2>next project</h2>
                <div>
                    <h3>{next.context}</h3>
                    <h1>{next.name}</h1>
                </div>
               <div style={{backgroundImage: `url(${next.cover})`}}/>
            </Link>
        </div>
    );
}