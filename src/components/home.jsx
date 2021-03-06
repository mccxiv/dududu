import React from 'react';
import Twitch from '../providers/twitch';
import Directory from './directory.jsx';
import Sandstorm from './sandstorm.jsx';
import {Button} from 'react-mdl';
import styles from './home.css';
import apiKey from '../config/client-id.js';

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

	login() {
		Twitch.login({clientId: apiKey, scopes: ['user_read']});
	}

	logout() {
		Twitch.logout();
		this.setState({user: null});
	}

	render() {
		var loggedIn = (
			<div>
				<div className={styles.toolbar}>
					Hi {this.state.user}
					<Button className={styles.logoutButton} onClick={this.logout.bind(this)}>Logout</Button>
				</div>
				<Directory user={this.state.user} />
			</div>
		);

		var loggedOut = (
			<div className={styles.loggedOut}>
				<Sandstorm />
				<img
					className={styles.loginButton}
					onClick={this.login}
					src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"
				/>
				<h4>A slightly better Twitch Following page</h4>
				<p>... which automatically refreshes and shows streams from your followed games too.</p>
			</div>
		);

		return (
			<div className="home">
				{this.state.user? loggedIn : loggedOut}
			</div>
		);
	}
}
