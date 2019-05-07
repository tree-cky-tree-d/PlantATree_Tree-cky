var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name					: String,
	price					: Number,
    description				: String
	// category				: String,
	// conditionsOfPlace		: String,
	// maintanceRequirements	: String,
	// maxHeight				: String,
	// growthRate				: String,
	// imageURL				: String
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);