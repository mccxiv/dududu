import React from 'react';

export default class ResponsiveChat extends React.Component {
	render() {
		let url = `http://www.twitch.tv/${this.props.channel}/chat`;
		return (
			<iframe className="chat" frameBorder="0" src={url}></iframe>
		);
	}
}