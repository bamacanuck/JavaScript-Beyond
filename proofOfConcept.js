// Load the NPM Package inquirer
var inquirer = require("inquirer");

require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

requestReq = require('request');

twitReq = require('twitter');

spotReq = require('node-spotify-api');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require ('./keys');

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["A", "B", "Spotify a song"],
      name: "pokemon"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    
    switch(inquirerResponse.pokemon) {
    case 'A':
        console.log("YEP - A");
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

        break;
    default:
        console.log("NOPE");
}
  });
