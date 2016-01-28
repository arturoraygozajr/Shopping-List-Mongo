var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

router.post('/', function(req, res, next){
  console.log("got body ", req.body)
  var newItem = new Item(req.body);
  console.log("new mongoose item", newItem)
	newItem.save(function(err, savedItem){
		if(err) return res.send(err);
    res.send(savedItem);
	})
})

router.get('/', function(req, res){
	Item.find({}, function(err, foundItems){
    if(err) return res.send(err);
    res.send(foundItems);
	})
})

router.delete('/:id', function(req, res){
  Item.findByIdAndRemove(req.params.id, function(err){
    if(err) return res.send(err);
    res.send("Deleted!");
  })
})


module.exports = router;

