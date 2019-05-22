import { Component } from 'preact';

class Projects extends Component {
    state = {}
    render() {
        return (
            <div className='project'>
                <p>{this.props.matches.name}</p>
            </div>
        );
    }
}
export default Projects;