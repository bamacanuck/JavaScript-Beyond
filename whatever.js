var inquirer = require("inquirer");

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

requestReq = require('request');

spotReq = require('node-spotify-api');

twitReq = require('twitter');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require ('./keys');

inquirer.prompt([
    {
      type: "list",
      message: "What do you want to do with this application?",
      choices: ["Get Tweets", "B", "Spotify a song"],
      name: "pokemon"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    
    switch(inquirerResponse.pokemon) {
    case 'Get Tweets':
        tweetTime();
        break;
    case 'B':
        console.log("YEP - B");
        break;
    case 'Spotify a song':
        
        var spot = new spotReq({
          id: keys.spotify.id,
          secret: keys.spotify.secret
        });
         
        spot.search({ type: 'track', query: 'Debaser' }, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }

        var artist = data.tracks.items[0].artists[0].name;

        console.log("artist : " + artist);

        
        var song = data.tracks.items[0].name;

        console.log("song title : " + song);


        var link = data.tracks.items[0].preview_url

        console.log("preview link : " + link);

        
        var album = data.tracks.items[0].album.name;

        console.log("from " + artist + " album : " + album);
        
        });

        break;
    default:
        console.log("NOPE");
}
  });


// ================================
// ================================
// ================================

function tweetTime () {

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
      //  console.log("We have some error trouble, here.");
      //  };
      };
    });
  };

  getTweets ('shanewlrh', 20);
};