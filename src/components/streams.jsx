import React from 'react';
import styles from './streams.css';
import Thumbnail from './thumbnail.jsx';

export default class Streams extends React.Component {
	render() {
		return (
			<div className={styles.streams}>
				{this.props.streams.map((stream, i) => {
					return (
						<Thumbnail
							className={styles.thumbnail}
							stream={stream}
							key={i}
						/>
					);
				})}

				{'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'.split('').map((o, i) => {
					return <div className={styles.thumbnailFiller} key={i} ></div>;
				})}
			</div>
		);
	}
}