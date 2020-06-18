const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  orders: {type: [{menuId: String, count: Number}], required: true},
  options: {type: {takeOut: Boolean, homeDelivery: Boolean}},
  payMethod: {type: {COD: Boolean, Online: Boolean}},
  deliveryAddress: {type: String},
  totalAmount: {type: Number, required: true},
  bookingBy: {type: {userId: String, timestamp: String}, required: true}
})

module.exports = mongoose.model('Order', orderSchema);
