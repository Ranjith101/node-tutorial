var http = require('http');
var fs = require('fs'); //To include the File System module, use the require() method:
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {//The fs.readFile() method is used to read files on your computer.
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write(data);
    return res.end();
  });
}).listen(8080);


// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
