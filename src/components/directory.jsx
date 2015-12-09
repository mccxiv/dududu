import React from 'react';
import Twitch from '../providers/twitch';
import styles from './directory.css';
import Thumbnail from './thumbnail.jsx';

export default class Directory extends React.Component {
	componentWillMount() {
		document.title = 'A less sucky Twitch - dududu';
		this.updateInterval = setInterval(this.updateStreams.bind(this), 60000);
		this.updateStreams();
	}

	componentWillUnmount() {
		clearTimeout(this.updateInterval);
	}

	updateStreams() {
		Twitch.api({method: '/streams/followed'}, (e, response) => {
			this.setState({streams: response.streams});
		});
	}

	render() {

		const streams = this.state? this.state.streams || [] : [];

		return (
			<div className={styles.directory}>
				<h3>Following</h3>
				<div className={styles.streams}>
					{streams.map((stream, i) => {
						return (
							<Thumbnail
								className={styles.thumbnail}
								stream={stream}
								key={i}
							/>
						);
					})}

					{"someletters".split('').map(() => {
						return <div className={styles.thumbnailFiller} ></div>;
					})}
				</div>
			</div>
		);
	}
}