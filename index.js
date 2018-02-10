require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require("./keys.js");
var spotReq = require("node-spotify-api");
var twitReq = require("twitter");

var requestReq = require("request");
var fsReq = require("fs");


var allArgs = process.argv;
var theArray = [];
// var action = process.argv.slice(2);

for (var i = 2; i < allArgs.length; i++){

  theArray.push(allArgs[i]);

}

var argOne = theArray.splice(0,1);
var argTwo = theArray.join(" ");
var ourTask = String(argOne);
var ourInput = String(argTwo);


// ================================
// ================================
// ================================

switch (ourTask){
  case "my-tweets":
  callTwitter();
  // logAction();
  break;

  case "spotify-this-song":
  callSpotify();
  // logAction();
  break;

  case "movie-this":
  callOMDB();
  // logAction();
  break;

  case "do-what-it-says":
  doThis();
  // logAction();
  break;

}

// ================================
// ================================
// ================================

//Functions

//Commands for Liri to take in...
// * `my-tweets`
function callTwitter(){

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
}

// ================================
// ================================
// ================================

// * `spotify-this-song`
function callSpotify (){
  console.log("yeah, the Spotify one");
  
      if (ourInput == "") {
        ourInput = 'The Sign - Ace of Base';
      }

      var spot = new spotReq({
                id: keys.spotify.id,
                secret: keys.spotify.secret
              });
               
              spot.search({ type: 'track', query: ourInput }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }

              // returning the specified data, and
              // including some categorization text

              var artist = data.tracks.items[0].artists[0].name;

              console.log("artist : " + artist);

              
              var song = data.tracks.items[0].name;

              console.log("song title : " + song);


              var link = data.tracks.items[0].preview_url

              console.log("preview link : " + link);

              
              var album = data.tracks.items[0].album.name;

              console.log("from " + artist + " album : " + album);
              
              });
      };

// ================================
// ================================
// ================================

// * `movie-this`
function callOMDB(){

  if (ourInput == "") {
  ourInput = 'Mr. Nobody';
};

// make the OMDB API request/call
var queryUrl = "http://www.omdbapi.com/?t=" + ourInput + "&y=&plot=short&apikey=trilogy";

// potential debugging helper
// console.log(queryUrl);

requestReq(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // parsing, to recover specified data,
    // and including some categorization text

    console.log("movie title : " + JSON.parse(body).Title);
    console.log("release year : " + JSON.parse(body).Year);
    console.log("IMDB rating : " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes rating : " + JSON.parse(body).Ratings[1].Value);
    console.log("produced in : " + JSON.parse(body).Country);
    console.log("language(s) : " + JSON.parse(body).Language);
    console.log("brief plot summary : " + JSON.parse(body).Plot);
    console.log("cast includes : " + JSON.parse(body).Actors);
  }
});

// * `do-what-it-says`
function doThis(){


};

};