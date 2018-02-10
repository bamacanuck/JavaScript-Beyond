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
  movieThis();
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
  // spotify.search({
  //   type:"track",
  //   query: value}, function(err, data){

  //     if (err) {
  //       console.log("Error occurred: " + err);
  //       return;
  //     }
  // // * if no song is provided then your program will default to
  // //   * "The Sign" by Ace of Base
  // if(ourInput === ""){
      
  //     }
  // else{

  // for (i = 0; i < 5; i++){

  //     var results = data.tracks.items[i];

  //     var artist = results.artists[0].name;
  //     var songName = results.name;
  //     var songLink = results.external_urls.spotify;
  //     var album = results.album.name;

  //     //Need: artist(s), song's name, preview link of song, album//
  //     console.log("************");
  //     console.log("Artist: " + artist);
  //     console.log("Song: " + songName);
  //     console.log("Song Link: " + songLink);
  //     console.log("Album: " + album);
  //     console.log("************");
  //   }
}

// ================================
// ================================
// ================================

// * `movie-this`
function movieThis(){

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

}

};
