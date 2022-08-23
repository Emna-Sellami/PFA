const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const clientRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
clientRoutes.route("/client").get(function (req, res) {
  let db_connect = dbo.getDb("HotelManagment");
  db_connect
    .collection("HotelDB")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 
  
// This section will help you get a single record by id
clientRoutes.route("/client/:id").get(function (req, res) {
     let db_connect = dbo.getDb();
     let myquery = { _id: ObjectId(req.params.id) };
     db_connect
       .collection("HotelDB")
       .findOne(myquery, function (err, result) {
         if (err) throw err;
         res.json(result);
       });
    });
     
// This section will help you create a new record.
clientRoutes.route("/client/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      checkin: req.body.checkin,
      checkout: req.body.checkout,
      rooms: req.body.rooms,
      adults: req.body.adults,
      children: req.body.children,
    };
    db_connect.collection("HotelDB").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
 
// This section will help you update a record by id.
clientRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      checkin: req.body.checkin,
      checkout: req.body.checkout,
      rooms: req.body.rooms,
      adults: req.body.adults,
      children: req.body.children,
    },
  };
  db_connect
    .collection("HotelDB")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
 });

 // This section will help you delete a record
clientRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("HotelDB").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
 });
      
   module.exports = clientRoutes;