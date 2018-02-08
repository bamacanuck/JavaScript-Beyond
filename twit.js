require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

twitReq = require('twitter');

var client = new twitReq({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	// console.log(tweets);
	if (!error) {
	    console.log(tweets);
	}
});

// console.log(params);