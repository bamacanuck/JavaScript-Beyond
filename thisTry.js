require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

var inTask;
var searchTerm;
var ourTask = process.argv[2];
var ourInput = process.argv.slice(3);  //check that this is slicing in the proper position
var searchTitle = "";

//creates a string from the command line parameters
for (i = 0; i < ourInput.length; i++){
  searchTitle += ourInput[i] + " ";
}

function liriMain(inTask, searchTerm) {

	var keys = require ('./keys');
	var requestReq = require("request");
	var twitReq = require('twitter');
	var spotReq = require('node-spotify-api');
	var fs = require('fs');

	switch (inTask) {
    
    case "my-tweets":
        console.log("that's the tweety one, alright");
        break;
    case "spotify-this-song":
        console.log("that's the spotify one, alright");
        break;
    case "movie-this":
        console.log("that's the movie one, alright");
        break;
    case "do-what-it-says":
        console.log("that's the read-the-file one, alright");
        break;
    default:
        console.log("Something has gone terribly wrong, I'm afraid.");
    }
  };

  liriMain (inTask, searchTerm);