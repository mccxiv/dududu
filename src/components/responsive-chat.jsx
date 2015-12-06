import React from 'react';
import styles from './responsive-chat.css';

export default class ResponsiveChat extends React.Component {
	render() {
		let url = `http://www.twitch.tv/${this.props.channel}/chat`;
		return (
			<iframe className={styles.chat} frameBorder="0" src={url}></iframe>
		);
	}
}