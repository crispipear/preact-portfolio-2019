import { Component } from 'preact';
import Data from '../lib';
import { route } from 'preact-router';

class Projects extends Component {
    state = {
        project: null
    }
    componentDidMount(){
        if(this.props.matches.name && Data[this.props.matches.name]){
            this.setState({
                project: Data[this.props.matches.name]
            })
        }else{
            setTimeout(() => {
                route('/')
            }, 2000)
        }
    }
    render() {
        const project = this.state.project
        return (
            project
            ?
            <div className='project container'>
                <div className='header'>
                    <div className='header-img' style={{backgroundImage: `url(${project.cover})`}}/>
                    <div className='header-info'>
                        <h1>{project.name}</h1>
                        <div className='header-info-grid'>
                            <h3>role</h3><h2>{project.role}</h2>
                            <h3>context</h3><h2>{project.context}</h2>
                            <h3>tools</h3><h2>{project.tools}</h2>
                            <h3>year</h3><h2>{project.year}</h2>
                        </div>
                    </div>
                </div>
                <div className='body'>
                    {project.body}
                </div>
            </div>
            :
            <div className='project container'>
                <p>project not found, redirecting...</p>
            </div>
        );
    }
}
export default Projects;