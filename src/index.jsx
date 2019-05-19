import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Channel from './components/channel.jsx';
import {Router, Route} from 'react-router';
import {createHistory} from 'history';
import '../node_modules/react-mdl/extra/material.js';
import '!!style!css!../node_modules/react-mdl/extra/material.css';
import '!!style!css!./assets/styles.css';

const history = createHistory({
	queryKey: false
});

ReactDOM.render(
	<Home />,
	document.querySelector('.main')
);
