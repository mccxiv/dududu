import React from 'react';
import {Link} from 'react-router';
import Twitch from '../providers/twitch';
import LoginButton from './login-button.jsx';
import Directory from './directory.jsx';

export default class Home extends React.Component {
	componentWillMount() {
		this.setState({user: false});

		Twitch.getStatus((error, status) => {
			console.log(status);
			if (status.authenticated) Twitch.api({method: '/'}, (e, res) => {
				this.setState({user: res.token.user_name});
			});
		});
	}

	render() {
		console.log('state!', this.state);

		var component;
		if (!this.state.user) component = <LoginButton />;
		else component = <Directory user={this.state.user} />;

		return (
			<div className="home">
				{component}
			</div>
		);
	}
}