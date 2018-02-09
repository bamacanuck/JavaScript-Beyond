require('dotenv').config('~/Desktop/GT_Code_Camp/liri/liri-node-app/.env');

spotReq = require('node-spotify-api');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require ('./keys');


var spotMethod = {

    runSpot: function () {

        var nodeArgsSpot = process.argv;

        var songName = "";

        // ensuring "coverage" of multi-word titles, as well (below)

        for (var i = 2; i < nodeArgsSpot.length; i++) {

          if (i > 2 && i < nodeArgsSpot.length) {

            songName = songName + "+" + nodeArgsSpot[i];

          }

          else {

            songName += nodeArgs[i];

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
    }
};

exports.module = spotMethod;