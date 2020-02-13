const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        return callback('breed not found', null);
      } else {
        return callback(null, data[0]['description']);
      }
    }
  });
};

module.exports = { fetchBreedDescription };