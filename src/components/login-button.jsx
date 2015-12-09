import React from 'react';
import Twitch from '../providers/twitch';

export default class LoginButton extends React.Component {
	login() {
		Twitch.login({scope: []})
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