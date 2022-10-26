// Node.js program to demonstrate the    
// os.hostname() method 
     
// Allocating os module
const os = require('os');
  
// Printing os.hostname() value
if(os.hostname()) {
    var hostname = os.hostname();
    console.log("Hostname for the operating"
        + " system is " + String(hostname));
}