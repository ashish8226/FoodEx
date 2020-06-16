const mongoose = require('mongoose')

const tableSchema = new Schema({
  tableNo: {type: Number, default: Math.floor(Math.random() * 40) + 1},
  bookingName: {type: String, required: true},
  bookingEmail: {type: String, required: true},
  address: {type: String, default: ''},
  bookingPhone: {type: String, required: true},
  bookingOnDate: {type: Date, required: true, minDate: Date.now()},
  noOfPeople: {type: Number, required: true},
  inTime: {type: String, required: true},
  outTime: {type: String, required: true},
  bookingBy: {type: {userId: String, timestamp: String}, required: true}
})

module.exports = mongoose.model('Table', tableSchema);
