import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Channel from './components/channel.jsx';
import {Router, Route, Link, IndexRoute} from 'react-router';
import {createHistory, useBasename} from 'history'

const history = createHistory({
	queryKey: false
});

ReactDOM.render(
	<Router location="history" history={history}>
		<Route path="/" component={Home} />
		<Route path="/:channel" component={Channel} />
	</Router>,
	document.querySelector('.main')
);