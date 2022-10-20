var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { //The fs.rename() method renames the specified file:
  if (err) throw err;
  console.log('File Renamed!');
});