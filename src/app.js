import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';

export default class App extends Component {
	state={
		currentUrl: "/"
	}
	handleRoute = e => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
		this.setState({
			currentUrl: e.url
		})
	};

	componentDidMount(){
		this.setState({
			currentUrl: window.location.pathname
		})
	}

	render() {
		return (
			<div id='app'>
				<Menu currentUrl={this.state.currentUrl}/>
				<Router onChange={this.handleRoute}>
					<Home path='/' />
					<About path='/about' />
					<Projects path='/projects/:name'/>
					<Projects path='/projects/'/>
				</Router>
				{
					this.state.currentUrl !== '/about' &&
					<Footer/>
				}
			</div>
		);
	}
}
