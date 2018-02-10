require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var keys = require ('./keys');


// separate out truly 'operative' arguments from users

opArgs= process.argv.slice(2);

var ourTask = opArgs[0];
var ourInput = opArgs[1];

function liriMain (ourTask, ourInput) {
    switch (ourTask) {
        
        case "my-tweets":
            callTwitter();
            break;

        case "spotify-this-song":
            if (opArgs.length === 1) {
                var songName = "The Sign Ace of Base";
            } else if (opArgs.length === 2) {
                var songName = ourInput;
            } else {
                var songName = '';
                for (var i = 1; i < opArgs.length; i++) {
                    songName = songName + ' ' + opArgs[i];
                }
            }
            callSpotify(songName);
            break;

        case "movie-this":
        	if (opArgs.length === 1) {
                var movieTitle = "Mr. Nobody";
            } else if (opArgs.length === 2) {
                movieTitle = ourInput;
            } else {
                movieTitle = '';
                for (var i = 1; i < opArgs.length; i++) {
                    movieTitle = movieTitle + ' ' + opArgs[i];
                }
            }    
            callOMDB(movieTitle); 
            break;

            default:
            	console.log("In choosing not to decide, you still have made a choice!");
        };

// ======================================================

function callSpotify (songName) {

	spotReq = require('node-spotify-api');

	// Add the code required to import the keys.js file and store it in a variable.

	var keys = require ('./keys');

	var nodeArgsSpot = process.argv;

	        var songName = "";

	        // ensuring "coverage" of multi-word titles, as well (below)

	        for (var i = 2; i < nodeArgsSpot.length; i++) {

	          if (i > 2 && i < nodeArgsSpot.length) {

	            songName = songName + "+" + nodeArgsSpot[i];

	          }

	          else {

	            songName += nodeArgsSpot[i];

	          }
	        };

	        if (songName == "") {
	          songName = 'The Sign - Ace of Base';
	        }

	        var spot = new spotReq({
	                  id: keys.spotify.id,
	                  secret: keys.spotify.secret
	                });
	                 
	                spot.search({ type: 'track', query: songName }, function(err, data) {
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

// ======================================================

function callOMDB (movieTitle) {

	requestReq = require('request');

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
	  else {
	  	console.log("We have some unexpected error trouble, folks.")
	  }
	});
};

// ======================================================

function callTwitter () {
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

	getTweets ('shanewlrh', 20);
	};