import React from 'react';
import Twitch from '../providers/twitch';
import apiKey from '../config/client-id.js';

export default class LoginButton extends React.Component {
	login() {
		Twitch.login({clientId: apiKey, scopes: ['user_read']})
	}

	render() {
		return (
			<img
				onClick={this.login}
				src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"
			/>
		);
	}
}