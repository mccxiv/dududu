import React from 'react';
import Twitch from '../providers/twitch';
import styles from './directory.css';
import Thumbnail from './thumbnail.jsx';

export default class Directory extends React.Component {
	componentWillMount() {
		Twitch.api({method: '/streams/followed'}, (e, response) => {
			this.setState({streams: response.streams});
		});
	}

	render() {

		const streams = this.state? this.state.streams || [] : [];

		return (
			<div className={styles.directory}>
				<h1>Following</h1>
				{streams.map((stream, i) => {
					return (
						<Thumbnail
							className={styles.thumbnail}
							stream={stream}
							key={i}
						/>
					);
				})}
			</div>
		);
	}
}