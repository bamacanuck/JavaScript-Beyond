var inquirer = require("inquirer");

// require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

// requestReq = require('request');

// spotReq = require('node-spotify-api');

// twitReq = require('twitter');

// Add the code required to import the keys.js file and store it in a variable.

// var keys = require ('./keys');

var twitQuery = require ('./twit.js');
var spotQuery = require ('./spot.js');

inquirer.prompt([
    {
      type: "list",
      message: "What function of this application do you wish to use?",
      choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
      name: "myTasker"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we display the
    // appropriate follow-up information.
    
    switch(inquirerResponse.myTasker) {
    
    case "my-tweets":
        twitQuery.module.tweetStorm();
        break;
    case "spotify-this-song":
        spotQuery.module.runSpot();
        break;
    case "movie-this":
        console.log("YEP - B");
        break;
    default:
        console.log("NOPE");
    }
  });