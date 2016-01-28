var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find({}, function(err, allItems){
    if(err) return res.send(err);
    res.render('index', { title: 'Items', items: allItems});
  });
});

module.exports = router;
