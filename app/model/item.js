var mongoose = require('mongoose');
var Schema = mongoose.Schema;

itemSchema = new Schema( {
	description: String
});

Item = mongoose.model('Item', itemSchema);

module.exports = Item;