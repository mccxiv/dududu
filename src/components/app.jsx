import React from 'react';
import ReactDOM from 'react-dom';
import ZoomableVideo from './zoomable-video.jsx';
import ResponsiveChat from './responsive-chat.jsx';

export default class App extends React.Component {
	componentWillMount() {
		this.setState({channel: window.location.pathname.substring(1)});
		console.log('Channel is: ', window.location.pathname.substring(1));
	}

	render() {
		return (
			<div className="app">
				<div className="nav"></div>
				<div className="content">
					<ZoomableVideo channel={this.state.channel}/>
					<ResponsiveChat channel={this.state.channel}/>
				</div>
			</div>
		);
	}
}