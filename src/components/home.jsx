import React from 'react';
import {Link} from 'react-router';
import Twitch from '../providers/twitch';
import LoginButton from './login-button.jsx';
import Directory from './directory.jsx';
import styles from './home.css';
import shake from '../assets/shake.css'
import cn from 'classnames';

export default class Home extends React.Component {
	componentWillMount() {
		this.setState({user: null});

		Twitch.getStatus((status) => {
			console.log('Twitch initialized, staus is:', status);
			if (status.token.user_name) this.setState({
				user: status.token.user_name
			});
		});
	}

	render() {
		var user, sandstorm, sandstorm2;

		sandstorm = cn(
			styles.sandstorm,
			shake['shake-slow'],
			shake['shake-constant']
		);

		sandstorm2 = cn(
			styles.sandstorm2,
			shake['shake-slow'],
			shake['shake-constant']
		);

		user = this.state.user;

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
				{user? <Directory user={user} /> : <LoginButton />}
			</div>
		);
	}
}