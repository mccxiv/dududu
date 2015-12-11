import req from 'reqwest';

window.r =req;

export default class Twitch {
	static init(clientId, callback) {
		localStorage.twitchClientId = clientId;
		this.grabIncomingToken();
		this.api({method: '/kraken/'}, callback);
	}

	static grabIncomingToken() {
		var hash = location.hash.substr(1);
		var token = hash.substr(hash.indexOf('access_token=')).split('&')[0].split('=')[1];
		if (token) {
			localStorage.twitchToken = token || null;
			window.location.replace('.'); // get rid of #hash_junk
		}
	}

	static login() {
		window.location.href = 'https://api.twitch.tv/kraken/oauth2/authorize' +
				'?response_type=token&client_id=' + localStorage.twitchClientId +
				'&redirect_uri=' + window.location.href;
	}

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

		if (token) {
			opts.data.oauth_token = token;
		}

		console.log(opts);

		req(opts);
	}
}