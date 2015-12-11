import React from 'react';
import cn from 'classnames';
import styles from './sandstorm.css'

export default class Sandstorm extends React.Component {
	render() {
		var sandstorm, sandstorm2;

		sandstorm = cn(
			styles.sandstorm,
			shake['shake-slow'],
			shake['shake-constant']
		);

		sandstorm2 = cn(
			styles.sandstorm2,
			shake['shake-slow'],
			shake['shake-constant']
		);

		return (
			<div class="ss">
				<img
					className={sandstorm2}
					src="https://static-cdn.jtvnw.net/emoticons/v1/62834/1.0"
				/>
				<img
					className={sandstorm}
					src="https://static-cdn.jtvnw.net/emoticons/v1/62834/2.0"
				/>
			</div>
		);
	}
}