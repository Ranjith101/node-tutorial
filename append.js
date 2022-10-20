var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { //method appends specified content to a file. If the file does not exist, the file will be created:
  if (err) throw err;
  console.log('Saved!');
});