require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

twitReq = require('twitter');

var client = new twitReq({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});

// var count = 1,
// 	util = require('util');

// client.stream('statuses/filter', {track: "love"}, function(stream) {
// 	stream.on('data', function(tweet) {
// 		console.log(tweet.text);
// 		stream.destroy();
// 		// process.exit(0);
// 	});
// });
 
var params = {screen_name: 'shanewlrh', count: 1};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	console.log(tweets[0].text);
	if (!error) {
	    console.log("");
	};
});
// console.log(params);