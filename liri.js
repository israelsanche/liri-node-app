// Grab the axios package...
var axios = require("axios");

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios
  .get("https://www.npmjs.com/package/node-spotify-api")
  .then(function (responsespotify) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(responsespotify.data);
  })
  .catch(function (error) {
    if (error.responsespotify) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.responsespotify.data);
      console.log(error.responsespotify.status);
      console.log(error.responsespotify.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

  axios
  .get("http://www.omdbapi.com")
  .then(function (responseomdb) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(responseomdb.data);
  })

  axios
  .get("http://www.artists.bandsintown.com/bandsintown-api")
  .then(function (responsebandsintown) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(responsebandsintown.data);
  })

