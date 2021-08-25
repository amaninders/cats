const fs = require('fs');

const breedDetailsFromFile = (breed, done) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      done(data);
    } else {
      done(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;