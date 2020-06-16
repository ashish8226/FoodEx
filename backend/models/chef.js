const mongoose = require('mongoose')

const chefSchema = new Schema({
  name:{type: String,required: true},
  description: { type:String, required: true },
  imageUrl:{type: String,default: ''}
})

module.exports = mongoose.model('Chef',chefSchema);
