const mongoose = require('mongoose')

const orderSchema = new Schema({
  orders: {type: [{menuId: String, count: Number}], required: true},
  options: {type: {takeOut: Boolean, homeDelivery: Boolean}, default: {false, true}},
  payMethod: {type: {COD: Boolean, Online: Boolean}, default: {false, true}},
  deliveryAddress: {type: String, default: ''},
  totalAmount: {type: Number, required: true},
  bookingBy: {type: {userId: String, timestamp: String}, required: true}
})

module.exports = mongoose.model('Table', tableSchema);
