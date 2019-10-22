import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';

const LoadScreen = () => <div>loading...</div>

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
				{/* <Menu currentUrl={this.state.currentUrl}/> */}
					<Home/>
				{/* <Router onChange={this.handleRoute}> */}
					{/* <AsyncRoute path="/" component={Home} loading={ () => LoadScreen}/>
					<AsyncRoute path="/about" component={About} loading={ () => LoadScreen}/>
					<AsyncRoute path="/projects/:name" component={Projects} loading={ () => LoadScreen}/> */}
					{/* <Projects path='/projects/:name' loading={ () => <div>loading...</div>}/> */}
				{/* </Router> */}
				{
					// this.state.currentUrl !== '/about' &&
					// <Footer/>
				}
			</div>
		);
	}
}
