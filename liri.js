// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

// require("dotenv").config();

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

requestReq = require('request');

twitReq = require('twitter');

spotReq = require('node-spotify-api');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require ('./keys');

// console.log(keys.twitter.consumer_key);

// console.log(keys.spotify);

// console.log(keys.testing);

// ====================================
// ====================================
// ====================================


var spot = new spotReq({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
spot.search({ type: 'track', query: 'Debaser' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

// provides the artist name

// console.log(data.tracks.items[0].artists[0].name);

var artist = data.tracks.items[0].artists[0].name;

console.log("artist : " + artist);

// provides the song/track name

// console.log(data.tracks.items[0].name);

var song = data.tracks.items[0].name;

console.log("song title : " + song);

// provides the preview link

// console.log(data.tracks.items[0].preview_url);

var link = data.tracks.items[0].preview_url

console.log("preview link : " + link);

// provides the album name

// console.log(data.tracks.items[0].album.name);

var album = data.tracks.items[0].album.name;

console.log("from " + artist + " album : " + album);
});


// ====================================
// ====================================
// ====================================


var twit = new spotReq({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
twit.search({ type: 'track', query: 'Debaser' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }


// You should then be able to access your keys information like so
//   var spotify = new Spotify(keys.spotify);
//   var client = new Twitter(keys.twitter);
// Make it so liri.js can take in one of the following commands:
// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// *** node list selector with the inquirer module, maybe


// What Each Command Should Do
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

// Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

// Step One: Visit https://developer.spotify.com/my-applications/#!/

// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

// node liri.js movie-this '<movie name here>'
// This will output the following information to your terminal/bash window:

//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
