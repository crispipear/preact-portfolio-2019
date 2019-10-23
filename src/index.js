import './style';
import App from './app';
import { h, render } from 'preact';

let root;
function init() {
	root = render(<App />, document.body, root);
}

init()