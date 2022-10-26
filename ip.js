// Getting IP of user

// Importing the DNS module
const dns = require('dns');

// Pass the user DNS for which IP is needed
dns.lookup('www.tutorialspoint.com',
(err, addresses, family) => {
   // Print the IP address of user
   console.log('IP Address : ', addresses);
   // Print the number of families found
   console.log('IP Family: ', family);
});