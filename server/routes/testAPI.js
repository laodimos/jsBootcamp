//route created for testing purposes. Delete once not needed
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Server is working properly');
});

module.exports = router;
