var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
    res.write("Hello World! yeah its from http"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
