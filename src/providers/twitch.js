import req from 'reqwest';

export default class Twitch {
	/**
	 * Passes the root API response, providing token if available.
	 *
	 * @param callback
	 */
	static getStatus(callback) {
		this.grabIncomingToken();
		this.api({method: '/kraken/'}, callback);
	}

	static grabIncomingToken() {
		var hash = location.hash.substr(1);
		var token = hash.substr(hash.indexOf('access_token=')).split('&')[0].split('=')[1];
		if (token) {
			localStorage.twitchToken = token || null;
			history.replaceState({}, null, window.location.href.split('#')[0]);
		}
	}

	/**
	 * Redirects the user to the Twitch authorization page.
	 *
	 * @param {object}   opts
	 * @param {string}   opts.clientId - API key provided by Twitch
	 * @param {string[]} opts.scopes - List of user scopes needed
	 */
	static login(opts) {
		if (typeof opts !== 'object') {
			throw Error('Passed a non object to Twitch.login');
		}
		localStorage.twitchClientId = opts.clientId;
		window.location.href = 'https://api.twitch.tv/kraken/oauth2/authorize' +
			'?response_type=token&client_id=' + localStorage.twitchClientId +
			'&redirect_uri=' + window.location.href;
	}

	/**
	 * Dumb wrapper around the twitch API.
	 *
	 * @param {object} config
	 * @param config.method - The URL part after api.twitch.tv
	 * @param config.data - Query parameters object
	 *
	 * @param callback - Function that will be passed resulting data
	 */
	static api(config, callback) {
		var token = localStorage.twitchToken;
		var opts = {
			url: 'https://api.twitch.tv' + config.method,
			data: config.data || {},
			type: 'jsonp',
			success: (data) => {
				console.log('Twitch API response.', data);
				callback(data);
			}
		};
		if (token) opts.data.oauth_token = token;
		req(opts);
	}
}