const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  uid: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, default: ''},
  phone: {type: String, default: ''},
  isAdmin: {type: Boolean, default: false},
  imageUrl: {type: String, default: false},
  lastOrders: {type: [{menuId: String, date: Date}], default: [{}]},
  favorites: {type: [String], default: []}
})

module.exports = mongoose.model('User', userSchema);
