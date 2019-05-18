const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  name                  : String,
  price                 : Number,
  description           : String,
  category              : String,
  conditionsOfPlace     : String,
  maintanceRequirements : String,
  maxHeight             : String,
  growthRate            : String,
  imageURL              : String
});

module.exports = mongoose.model('trees', treeSchema);



