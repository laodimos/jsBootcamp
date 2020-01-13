var express = require('express'); // require Express
var router = express.Router(); // setup usage of the Express router engine

/* PostgreSQL and PostGIS module and connection setup */
const { Client, Query } = require('pg')

// Setup connection
var username = "username" // sandbox username
var password = "pasword" // read only privileges on our table
var host = "localhost:5432"
var database = "databasename" // database name
var conString = "postgres://"+username+":"+password+"@"+host+"/"+database; // Your Database Connection

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@localhost:5432/databasename')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



  router.get('/data', function(req, res, next) {
     var dat2=db.one({text: 'SELECT fieldname FROM tablename'})
    .then(function(data2){
      res.send('data: <br/>' + data2.fieldname);
    })
  });

module.exports = router;