import React from 'react';
import styles from './channel.css';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import FlatButton from 'material-ui/lib/flat-button';
import ZoomableVideo from './zoomable-video.jsx';
import ResponsiveChat from './responsive-chat.jsx';
import {Link} from 'react-router';

export default class Channel extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className={styles.channel}>
				<ZoomableVideo channel={this.props.params.channel}/>
				<ResponsiveChat channel={this.props.params.channel}/>
			</div>
		);
	}
}