import React from 'react';
import {Link} from 'react-router';
import Twitch from '../providers/twitch';
import LoginButton from './login-button.jsx';
import Directory from './directory.jsx';
import {Button} from 'react-mdl';
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

	logout() {
		Twitch.logout();
		this.setState({user: null});
	}

	render() {
		var loggedIn = (
			<div>
				<div className={styles.toolbar}>
					Hi {this.state.user}
					<Button className={styles.logoutButton} onClick={this.logout}>Logout</Button>
				</div>
				<Directory user={this.state.user} />
			</div>
		);

		var loggedOut = (
			<div>
				<LoginButton />}
			</div>
		);

		return (
			<div className="home">
				{this.state.user? loggedIn : loggedOut}
			</div>
		);
	}
}