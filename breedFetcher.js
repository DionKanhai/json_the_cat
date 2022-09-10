// Import the request library
const request = require('request');

// function that takes a cat name and returns the cat description 
const findCats = function () {
  // grab the string in the array of the user input
  const input = process.argv.slice(2)[0]
  // get data for cat breed based on user input
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {  
  if (error) {
  console.log('error:', error);
  } 
  const catData = JSON.parse(body);
  
  // log cat description if found  
  if (catData.length) {
  console.log(catData[0].description)
  };
  // if cat isnt in requested data then log not found
    if (catData.length === 0) {
    console.log('Breed not found');
  };
});
}; 

findCats();

