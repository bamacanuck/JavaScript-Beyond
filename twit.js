require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

twitReq = require('twitter');

var client = new twitReq({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});


function getTweets (handle, number) {

// var params = {screen_name: 'shanewlrh', count: 20};

	var params = {screen_name: handle, count: number};

	client.get ('statuses/user_timeline', params, function(error, tweets, response) {
		// console.log(tweets[0].text);
		if (error) {
			console.log("We have some error trouble, here.");
		}
		else {
			// console.log('yep');
			for (var i = 0; i < tweets.length; i++) {
				console.log("tweet text : " + tweets[i].text);
				console.log("first tweeted when : " + tweets[i].created_at);
		};

		// here's our problem (the 'else part, below)
		// else {
		// 	console.log("We have some error trouble, here.");
		// 	};
		};
	});
};

getTweets ('shanewlrh', 20);

// console.log("YEP... that's the one, alright...");