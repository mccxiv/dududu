//var React = require('react');
//var ReactDOM = require('react-dom');

console.log('kk 4');

class App extends React.Component {
	componentWillMount() {
		this.setState({channel: window.location.pathname.substring(1)});
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

class ResponsiveChat extends React.Component {

	render() {
		let url = `http://www.twitch.tv/${this.props.channel}/chat`;
		return (
			<iframe className="chat" frameBorder="0" src={url}></iframe>
		);
	}
}



ReactDOM.render(<App></App>, document.querySelector('.main'));