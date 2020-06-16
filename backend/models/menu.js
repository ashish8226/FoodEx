const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  imageUrl: {type: String, required: false},
  heartCounts:{type:Number,required:false, default:0},
  liked_by_id:{type: [String],required: false,default:[]},
  timestamp: {type: String,required: true}
});

module.exports = mongoose.model('Menu', menuSchema);


