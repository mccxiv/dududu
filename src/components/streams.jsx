import React from 'react';
import styles from './streams.css';
import Thumbnail from './thumbnail.jsx';

export default class Streams extends React.Component {
	render() {
		var streams = this.props? this.props.streams || [] : [];
		return (
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
			</div>
		);
	}
}