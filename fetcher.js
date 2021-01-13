const args = process.argv.slice(2);
const fs = require('fs');
const request = require("request");
const pageContent = {}
const filetoSave = args[1];

request('http://www.example.edu', (error, response, body) => {
  pageContent.error = ('error:', error);
  pageContent.status = ('statusCode:', response && response.statusCode);
  pageContent.body = ('body:', body);

  fs.writeFile(filetoSave, body, error => {
    console.log(`Downloaded and saved ${fs.statSync(filetoSave).size} bytes to ${filetoSave}`);
  });

})
