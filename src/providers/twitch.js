import 'expose?$!expose?jQuery!jquery';
import 'twitch-sdk/twitch';

Twitch.init({clientId: 'td1da4i5v5vwoppelq4yg99oas4cens'}, function(e, status) {
	//console.log(status);
});

export default window.Twitch;