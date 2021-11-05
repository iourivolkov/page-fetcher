// LOCAL FILE PATH -->  URL http://www.example.edu/ + PATH  ./index.html
const args = process.argv;
const htmlRequest = args.slice(2);
const url = htmlRequest[0];
const localfilePath = htmlRequest[1]; 
// console.log(url);
// console.log(filePath);


// require the request module
const request = require('request');

// request resource (data) from the url 
request(url, (error, response, body) => {
 
  //require fs module 
  const fs = require('fs');
  // write to file in Node.js 
  fs.writeFile(localfilePath, body, err => {
    if(err){
     console.error(err)
     return;
    }
    // get file stats using stat() 
    // pass file path, once Node.js gets the file details it will call the callback fn you pass w. two params - an error message and the file stats
    fs.stat(localfilePath, (err, stats) => {
      if(err){
        console.error(err)
        return;
      } // extract file size in bytes using stats.size 

      
      console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`); // --> print statement to the user 
        // downloads index.html file & prints "Downloaded and saved 1256 bytes to ./index.html"
    });
 });
});





