const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const contactRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
contactRoutes.route("/contact").get(function (req, res) {
  let db_connect = dbo.getDb("HotelManagment");
  db_connect
    .collection("contactDB")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 
  
// This section will help you get a single record by id
contactRoutes.route("/contact/:id").get(function (req, res) {
     let db_connect = dbo.getDb();
     let myquery = { _id: ObjectId(req.params.id) };
     db_connect
       .collection("contactDB")
       .findOne(myquery, function (err, result) {
         if (err) throw err;
         res.json(result);
       });
    });
     
// This section will help you create a new record.
contactRoutes.route("/contact/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      msg: req.body.msg,
    };
    db_connect.collection("contactDB").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
   
   module.exports = contactRoutes;