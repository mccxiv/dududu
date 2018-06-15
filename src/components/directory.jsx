import React from 'react';
import styles from './directory.css';
import Streams from './streams.jsx';
import Twitch from '../providers/twitch';

export default class Directory extends React.Component {
	componentWillMount() {
		document.title = 'Following - Twitch';

		this.updateFollowing();
		this.updateGames();

		this.timers = [];
		this.timers.push(setInterval(this.updateFollowing.bind(this), 60000));
		this.timers.push(setInterval(this.updateGames.bind(this), 120000));
	}

	componentWillUnmount() {
		this.timers.map(clearInterval);
	}

	updateFollowing() {
		Twitch.api({method: '/kraken/streams/followed'}, (response) => {
			this.setState({following: response.streams});
		});
	}

	updateGames() {
		var user = this.props.user;

		Twitch.api({method: '/api/users/'+user+'/follows/games/live'}, (data) => {
			data.follows.forEach((game) => {
				game = game.game; // :(
				Twitch.api(
					{method: '/kraken/streams', data: {game: game.name, limit: 100}},
					(data) => {
						var games = (this.state? this.state.games : {}) || {};
						games[game.name] = data.streams;
						this.setState({games: games});
					}
				);
			});
		});
	}

	render() {
		var elements = [];

		if (this.state && this.state.games) {

			elements.push(<h3 key="following"><a href="http://www.twitch.tv/directory/following/">Following</a></h3>);
			elements.push(<Streams key="followingStreams" streams={this.state.following} />);

			Object.keys(this.state.games).forEach((key, i) => {
				var gameUrl = 'http://www.twitch.tv/directory/game/' + key;
				elements.push(<h3 key={'h3'+i}><a href={gameUrl}>{key}</a></h3>);
				elements.push(<Streams streams={this.state.games[key]} key={i} />)
			});
		}

		return (
			<div className={styles.directory}>
				{elements}
			</div>
		);
	}
}