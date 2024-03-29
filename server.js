"use strict";

const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
    console.log('---\nprinting the \'MYVAR\' env var:');
    console.log(process.env.MYVAR);
    console.log('---\nprinting the cli args:');
    for (let index in process.argv) {
      if (index < 2) {
        continue;
      }
      console.log(process.argv[index]);
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
