/**
 * Rename this file to client-id.js and replace the strings with your
 * Client IDs, the ones from https://secure.twitch.tv/settings/connections
 *
 * You'll probably want to have 2 different ones, one for your website
 * and another that redirects to localhost, for development.
 */

let clientId;

if (WEBPACK_IS_PRODUCTION) clientId = 'my-production-client-id';
else clientId = 'my-localhost-client-id';

export default clientId;