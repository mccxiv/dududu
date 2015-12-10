import React from 'react';
import Twitch from '../providers/twitch';
import styles from './streams.css';
import Thumbnail from './thumbnail.jsx';
import reqwest from 'reqwest';

export default class Channels extends React.Component {
	componentWillMount() {
		this.updateGames();
	}

	componentWillUnmount() {

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

							window.state = this.state;
						}
					});
				});
			}
		});
	}

	render() {

		var elements = [];

		Object.keys(this.state.games).forEach((key) => {
			elements.push(<h3>{key}</h3>);
			this.state.games.key.forEach((stream) => {
				elements.push(<Thumbnail stream={stream} />)
			});
		});


		return (
			<div className={styles.streams}>
				{elements};
			</div>
		);
	}
}