import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				This is the Home component <Link to="/misslorzz">Go</Link>
			</div>
		);
	}
}