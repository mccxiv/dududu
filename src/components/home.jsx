import React from 'react';
import {Link} from 'react-router';
import Twitch from '../providers/twitch';
import LoginButton from './login-button.jsx';
import Directory from './directory.jsx';
import styles from './home.css';
import shake from '../assets/shake.css'
import cn from 'classnames';
import apiKey from '../config/api-key.js';

export default class Home extends React.Component {
	componentWillMount() {
		this.setState({user: false});

		Twitch.init(apiKey, (status) => {
			console.log('Twitch initialized, staus is:', status);
			if (status.token.user_name) this.setState({
				user: status.token.user_name
			});
		});
	}

	render() {
		var component;
		if (!this.state.user) component = <LoginButton />;
		else component = <Directory user={this.state.user} />;

		var sandstorm = cn(
			styles.sandstorm,
			shake['shake-slow'],
			shake['shake-constant']
		);

		var sandstorm2 = cn(
			styles.sandstorm2,
			shake['shake-slow'],
			shake['shake-constant']
		);

		return (
			<div className="home">
				<img
					className={sandstorm2}
					src="https://static-cdn.jtvnw.net/emoticons/v1/62834/1.0"
				/>
				<img
					className={sandstorm}
					src="https://static-cdn.jtvnw.net/emoticons/v1/62834/2.0"
				/>
				{component}
			</div>
		);
	}
}