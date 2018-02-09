var inquirer = require("inquirer");

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

// requestReq = require('request');

// spotReq = require('node-spotify-api');

// twitReq = require('twitter');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require ('./keys');

twitQuery = require ('./twit.js');

inquirer.prompt([
    {
      type: "list",
      message: "What do you want to do with this application?",
      choices: ["B", "Spotify a song"],
      name: "myTasker"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we display the
    // appropriate follow-up information.
    
    switch(inquirerResponse.myTasker) {
    
    case "B":
        console.log("YEP - B");
        break;
    case "Spotify a song":
        console.log("YEP - C");
        break;
    // case "Get Tweets":
    //     tweetStorm();
    //     break;
    default:
        console.log("NOPE");
    }
  });