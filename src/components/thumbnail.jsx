import React from 'react';
import styles from './thumbnail.css';
import cn from 'classnames';
import {Button, Icon} from 'react-mdl';
import {Link} from 'react-router';

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
			var game = stream.channel.game;
			var viewers = stream.viewers;
			var displayName = stream.channel.display_name;
			var uptime = this.calculateUptime(new Date(stream.created_at));

		} catch(e) {}

		return (
			<Link
				to={name}
				className={cn(styles.thumbnailContainer, this.props.className)}
			>
				<div
					className={styles.thumbnail}
					style={{background: 'url(' + img + ') center / cover'}}
				></div>
				<span className={styles.extra}>
					{uptime} <Icon name="people" /> {viewers}
				</span>
				<span className={styles.label}>{displayName}. {game}</span>
			</Link>
		);
	}
}