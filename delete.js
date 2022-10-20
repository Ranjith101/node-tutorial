var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {  //The fs.unlink() method deletes the specified file:
  if (err) throw err;
  console.log('File deleted!');
});