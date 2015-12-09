import $ from 'jquery';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './zoomable-video.css';
import 'jquery.panzoom/dist/jquery.panzoom';

export default class ZoomableVideo extends React.Component {
	componentDidMount() {
		var el = $(ReactDOM.findDOMNode(this));

		var v = el.find('.' + styles.video);
		var vc = el.find('.' + styles.videoContainer);
		var vcc = el;

		vc.panzoom({
			contain: 'invert',
			minScale: 1,
			increment: 0.8,
			easing: "ease-in-out"
		});

		vcc.on('mousewheel.focal', function( e ) {
			e.preventDefault();
			var delta = e.delta || e.originalEvent.wheelDelta;
			var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
			vc.panzoom('zoom', zoomOut, {focal: e});
		});

		vcc.on('mousewheel', function() {
			setTimeout(checkZoomLevel, 200);   // Check initial
			setTimeout(checkZoomLevel, 1500);  // Check final state
		});

		function checkZoomLevel() {
			if (v[0].getBoundingClientRect().width > vc.width()) {
				v.css('z-index', '-1');
			}
			else v.css('z-index', 'unset');
		}
	}

	render() {
		return (
			<div className={styles.videoContainerContainer}>
				<div className={styles.videoContainer}>
					<iframe
						className={styles.video}
						frameBorder="0"
						allowFullScreen
						src={`http://player.twitch.tv/?channel=${this.props.channel}`}
					></iframe>
				</div>
			</div>
		);
	}
}