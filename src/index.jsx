import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import '../node_modules/react-mdl/extra/material.js';
import '!!style!css!../node_modules/react-mdl/extra/material.css';
import '!!style!css!./assets/styles.css';

ReactDOM.render(
	<Home />,
	document.querySelector('.main')
);
