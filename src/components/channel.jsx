import React from 'react';
import styles from './channel.css';
import ZoomableVideo from './zoomable-video.jsx';
import ResponsiveChat from './responsive-chat.jsx';
import {Link} from 'react-router';
import {Button, IconButton, Icon} from 'react-mdl';

export default class Channel extends React.Component {
	componentDidMount() {
		var chan = this.props.params.channel;
		document.title = chan[0].toUpperCase() + chan.slice(1) + ' - dududu';
	}

	render() {
		console.log(this.props);
		return (
			<div className={styles.channel}>
				<Button className={styles.backButton} component={Link} to="/">
					<Icon name="chevron_left" />
				</Button>
				<ZoomableVideo channel={this.props.params.channel} />
				<ResponsiveChat channel={this.props.params.channel} />
			</div>
		);
	}
}