function myOMDB () {

// omdb query part

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');

var requestReq = require("request");

// storing arguments in array form
var nodeArgs = process.argv;

var movieName = "";

// ensuring "coverage" of multi-word titles, as well (below)


for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
};

// setting specified movie as default

if (movieName == "") {
	movieName = 'Mr. Nobody';
};

// make the OMDB API request/call
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

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

};

myOMDB ();