import React from 'react';
import reqwest from 'reqwest';
import styles from './directory.css';
import Streams from './streams.jsx';

export default class Directory extends React.Component {
	componentWillMount() {
		document.title = 'dududu. A less sucky Twitch';

		this.updateFollowing();
		this.updateGames();
	}

	updateFollowing() {
		Twitch.api({method: '/streams/followed'}, (e, response) => {
			this.setState({following: response.streams});
		});
	}

	updateGames() {
		reqwest({
			url: 'https://api.twitch.tv/api/users/k3nt0456/follows/games/live',
			type: 'jsonp',
			success: (data) => {
				data.follows.forEach((game) => {
					game = game.game; // :(
					reqwest({
						url: 'https://api.twitch.tv/kraken/streams',
						data: {game: game.name},
						type: 'jsonp',
						success: (data) => {
							var games = (this.state? this.state.games : {}) || {};
							games[game.name] = data.streams;
							this.setState({games: games});
						}
					});
				});
			}
		});
	}

	render() {
		var elements = [];

		if (this.state && this.state.games) {

			elements.push(<h3>Following</h3>);
			elements.push(<Streams streams={this.state.following} />);

			Object.keys(this.state.games).forEach((key) => {
				elements.push(<h3>{key}</h3>);
				elements.push(<Streams streams={this.state.games[key]} />)
			});
		}

		return (
			<div className={styles.directory}>
				{elements}
			</div>
		);

	}
}