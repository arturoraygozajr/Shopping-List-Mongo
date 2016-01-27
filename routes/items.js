var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

router.post('/', function(req, res, next){
	var newItem = new Item(req.body);
	newItem.save(function(err, savedItem){
		if(err) return res.send(err);
		console.log(savedItem);
	})
})

router.get('/', function(req, res){
	Item.find({}, function(err, foundItems){
		console.log(foundItems)
	})
})


module.exports = router;

