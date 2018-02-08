// omdb

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

twitReq = require('twitter');

var client = new twitReq({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});


function getMovieData {
	
}

getTweets ('shanewlrh', 20);