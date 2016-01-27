var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Item;

var itemSchema = Schema({
	itemName : {type: String, required: true},
	price : {type: Number, required: true}
});

Item = mongoose.model('Item', itemSchema);
module.exports = Item