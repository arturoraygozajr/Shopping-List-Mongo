var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

// Create
router.post('/', function(req, res, next){
  console.log("got body ", req.body)
  var newItem = new Item(req.body);
  console.log("new mongoose item", newItem)
  newItem.save(function(err, savedItem){
    if(err) return res.send(err);
    res.send(savedItem);
  })
})

// Read
router.get('/', function(req, res){
	Item.find({}, function(err, foundItems){
    if(err) return res.send(err);
    res.send(foundItems);
	})
})


// Update
router.put('/', function(req, res){
  Item.findByIdAndUpdate(req.body._id, req.body, function(err, doc){
    if(err) return res.send(err);
    res.send(req.body);
  });
})


// Delete
router.delete('/:id', function(req, res){
  Item.findByIdAndRemove(req.params.id, function(err){
    if(err) return res.send(err);
    res.send("Deleted!");
  })
})






module.exports = router;

