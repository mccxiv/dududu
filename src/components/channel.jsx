import React from 'react';
import ZoomableVideo from './zoomable-video.jsx';
import ResponsiveChat from './responsive-chat.jsx';

export default class Channel extends React.Component {
	render() {
		return (
			<div className="channel">
				<div className="nav"></div>
				<div className="content">
					<ZoomableVideo channel={this.props.params.channel}/>
					<ResponsiveChat channel={this.props.params.channel}/>
				</div>
			</div>
		);
	}
}