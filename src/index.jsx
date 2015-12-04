import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Channel from './components/channel.jsx';
import {Router, Route, Link} from 'react-router';
import createHistory from 'history/lib/createHashHistory';

var history = createHistory({
	queryKey: false
});

ReactDOM.render(
		<Router history={history}>
			<Route path="/" component={Home} />
			<Route path="/:channel" component={Channel} />
		</Router>,
		document.querySelector('.main')
);