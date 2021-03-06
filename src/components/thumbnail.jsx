import React from 'react';
import styles from './thumbnail.css';
import cn from 'classnames';
import {Icon} from 'react-mdl';

export default class Thumbnail extends React.Component {
	/**
	 * Time since a date, in h:mm
	 * @param {Date} since
	 * return {string}
	 */
	calculateUptime(since) {
		var diff = new Date(new Date() - since);
		var h = diff.getUTCHours();
		var m = ('0' + diff.getUTCMinutes()).slice(-2);
		return h + ':' + m;
	}

	render() {
		try {
			var stream = this.props.stream;
			var img = stream.preview.medium;
			var name = stream.channel.name;
			var title = stream.channel.status;
			var viewers = stream.viewers;
			var displayName = stream.channel.display_name;
			var uptime = this.calculateUptime(new Date(stream.created_at));
		} catch(e) {}

		return (
			<a
				href={`https://twitch.tv/${name}`}
				target='_blank'
				rel='noopener'
				className={cn(styles.thumbnailContainer, this.props.className)}
				title={title}
			>
				<div
					className={styles.thumbnail}
					style={{background: 'url(' + img + ') center / cover'}}
				></div>
				<span className={styles.name}>{displayName} | {uptime} <Icon name="people" /> {viewers}</span>
				<span className={styles.title}>{title}</span>
			</a>
		);
	}
}