// Import the request library
const request = require('request');

//function that takes a cat name and returns the cat description
const fetchBreedDescription = function(breedName, callback) {
  // get data for cat breed based on user input
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {  
  if (error) {
  callback(error, null)
    return;
  }; 
  const catData = JSON.parse(body);
    // if cat isnt in requested data then log not found
  if (catData.length === 0) {
    callback('Breed not found', null);
    return;
  };
  // log cat description if found  
  callback(null, catData[0].description)
    return;
    });
  }; 

module.exports = { fetchBreedDescription };