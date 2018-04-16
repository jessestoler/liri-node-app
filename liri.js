require("dotenv").config();


const pw = require("./keys.js");
const music = require("node-spotify-api"); 
const twitter = require('twitter');
const fs = require("fs");
const request = require("request");
const film = "http://www.omdbapi.com/?apikey=f898a1b9&t=" + process.argv[3];

const nobody = "http://www.omdbapi.com/?apikey=f898a1b9&t=" + "Mr. Nobody";
const spotify = new music(pw.spotify);
const retweet = new twitter(pw.twitter);

function backstreet() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) throw err;
      
      
      
      data = data.replace(",", " ");

      if (data[1] ==  "o" && data.length > 10) {

        let movieStuff = data.replace("movie-this ", "");
        let filmStuff = "http://www.omdbapi.com/?apikey=f898a1b9&t=" + movieStuff;
        request(filmStuff, function(error, response, body) {
          console.log(JSON.parse(body).Title);
          console.log(JSON.parse(body).Year);
          console.log(JSON.parse(body).Ratings[0].Source + ": " + JSON.parse(body).Ratings[0].Value);
          console.log(JSON.parse(body).Ratings[1].Source + ": " + JSON.parse(body).Ratings[1].Value);
          console.log(JSON.parse(body).Country);
          console.log(JSON.parse(body).Language);
          console.log(JSON.parse(body).Plot);
          console.log(JSON.parse(body).Actors);
          });
        
        
      }
      
      if (data[1] == "o" && data.length <= 10) {
        mr();
      }
      

     

      if (data[1] ==  "p" && data.length == 17) {
        theSign();
      }

      if (data[1] ==  "p") {
        let note = data.replace("spotify-this-song ", "");
        spotify.search({ type: 'track', query: note }, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
           
          }
        console.log(data.tracks.items[0].artists[0].name); 
        console.log(data.tracks.items[0].name); 
        
        console.log(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].album.name); 
        
         
        }); 
        
      }



      if (data[1] == "y") {
        printTweets();
      }
    
    });
    }

function cinema() {
    request(film, function(error, response, body) {
          console.log(JSON.parse(body).Title);
          console.log(JSON.parse(body).Year);
          console.log(JSON.parse(body).Ratings[0].Source + ": " + JSON.parse(body).Ratings[0].Value);
          console.log(JSON.parse(body).Ratings[1].Source + ": " + JSON.parse(body).Ratings[1].Value);
          console.log(JSON.parse(body).Country);
          console.log(JSON.parse(body).Language);
          console.log(JSON.parse(body).Plot);
          console.log(JSON.parse(body).Actors);
          
          
       
      });
      
  }

  function mr() {
    request(nobody, function(error, response, body) {
          console.log(JSON.parse(body).Title);
          console.log(JSON.parse(body).Year);
          console.log(JSON.parse(body).Ratings[0].Source + ": " + JSON.parse(body).Ratings[0].Value);
          console.log(JSON.parse(body).Ratings[1].Source + ": " + JSON.parse(body).Ratings[1].Value);
          console.log(JSON.parse(body).Country);
          console.log(JSON.parse(body).Language);
          console.log(JSON.parse(body).Plot);
          console.log(JSON.parse(body).Actors);
          
          
       
      });
      
  }

function printTweets() {
    var params = {screen_name: 'JesseStoler18'};
      retweet.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for (i = 0; i < 20; i++){
  
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);
          console.log("");
        }
      }
        });
  }

function theSign() {
    spotify.search({ type: 'track', query: "the sign" }, function(err, data) {
       if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(data.tracks.items[0].artists[0].name); 
      console.log(data.tracks.items[0].name); 
      
      console.log(data.tracks.items[0].preview_url);
      console.log(data.tracks.items[0].album.name); 
      
       
      }); 
}
  

function thisSong() {
  spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
     
    }
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(data.tracks.items[0].name); 
  
  console.log(data.tracks.items[0].preview_url);
  console.log(data.tracks.items[0].album.name); 
  
   
  });  
}

function command() {

if (process.argv[2] == "do-what-it-says") {
    backstreet();
}

else if (process.argv[2] == "movie-this" && process.argv.length == 4) {
    cinema();
}

else if (process.argv[2] == "movie-this" && process.argv.length == 3) {
  mr();
}

else if (process.argv[2] == "my-tweets") {
  printTweets();    
}

else if (process.argv[2] == "spotify-this-song" && process.argv.length == 3) {
  theSign();
  
}

else if (process.argv[2] == "spotify-this-song" && process.argv.length == 4) {
  thisSong();  
  
}

else {
  console.log("Pick a different command");
}

}

command();