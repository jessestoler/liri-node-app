# liri-node-app
This is a package that allows you to search for information regarding specific songs on Spotify, information regarding specific movies on Omdb, and your most recent tweets. All of this can be done through the use of simple command line requests:

do-what-it-says = will read a request from a .txt file<br>
movie-this = will return information regarding a movie of your choice<br>
my-tweets = will return information regarding your last 20 tweets<br>
spotify-this-song= will return information regarding a song of your choice<br>

# setup
<hr>Run <span style="background-color: gray">npm init</span> and <span style="background-color: gray">npm install</span> from the root directory of your project.<br>

Create a .env file in the root, and add your keys in this format. No quotes around the keys.

<span style="background-color: gray">
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
</span>



