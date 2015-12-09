import React from 'react';
import styles from './thumbnail.css';
import cn from 'classnames';
import {Button, Icon} from 'react-mdl';
import {Link} from 'react-router';

export default class Thumbnail extends React.Component {
	render() {
		try {
			var img = this.props.stream.preview.medium;
			var name = this.props.stream.channel.name;
			var game = this.props.stream.channel.game;
			var viewers = this.props.stream.viewers;
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
					<Icon name="people" /> {viewers}
				</span>
				<span className={styles.label}>{name}. {game}</span>
			</Link>
		);
	}
}