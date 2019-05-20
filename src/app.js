import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
export default class App extends Component {
	state={
		currentUrl: "/"
	}
	handleRoute = e => {
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
					<About path='about' />
				</Router>
				<Footer/>
			</div>
		);
	}
}
