// To select data from a collection in MongoDB, we can use the findOne() method.

// The findOne() method returns the first occurrence in the selection.

// The first parameter of the findOne() method is a query object. In this example 
//we use an empty query object, which selects all documents in a collection (but returns only the first document).

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


//------------------------Find 1-----------------------------
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("products").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
//------------------------Find 1-----------------------------


//------------------------Find All-----------------------------
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("products").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//------------------------Find All-----------------------------

//------------------------Find Particular-----------------------------

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
 
// You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). 
// If you specify a field with the value 0, all other fields get the value 1, and vice versa:

//------------------------Find Particular-----------------------------

// This example will exclude "address" from the result:


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// This example will exclude "id_field" from the result:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[2].name);
    db.close();
  });
});


// You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field):
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });