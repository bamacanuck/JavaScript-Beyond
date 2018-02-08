// omdb

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

var requestReq = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
/*
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}*/
// movieName = encodeURI(process.argv[2]);

movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

requestReq(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("movie title : " + JSON.parse(body).Title);
    console.log("release year : " + JSON.parse(body).Year);
    console.log("IMDB rating : " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes rating : " + JSON.parse(body).Ratings[0]);
    console.log("produced in : " + JSON.parse(body).Country);
    console.log("language(s) : " + JSON.parse(body).Language);
    console.log("brief plot summary : " + JSON.parse(body).Plot);
    console.log("cast includes : " + JSON.parse(body).Actors);
  }
});