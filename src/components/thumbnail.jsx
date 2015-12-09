import React from 'react';
import styles from './thumbnail.css';
import cn from 'classnames';
import {Card} from 'react-mdl';
import {Link} from 'react-router';

export default class Thumbnail extends React.Component {
	render() {
		var img, name, game;

		try {
			img = this.props.stream.preview.medium;
			name = this.props.stream.channel.name;
			game = this.props.stream.channel.game;
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
				<span className={styles.label}>{name}. {game}</span>
			</Link>
		);
	}
}