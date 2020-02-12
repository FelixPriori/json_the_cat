const request = require('request');
const args = process.argv;
args.splice(0, 2);

const breed = args[0];
const search = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

const breedFetcher = url => {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        console.log('Breed not found.');
      } else {
        console.log(data[0]['description']);
      }
    }
  });
};

breedFetcher(search);