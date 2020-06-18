const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  author_name:{type: String,required: true},
  author_id: { type:String ,required: true},
  title:{type: String, required:true},
  description: { type:String, required: true },
  likes:{type: Number,default:0},
  liked_by_id:{type:[String],default:[]},
  timestamp: { type:String,required: true }
  })

module.exports = mongoose.model('Blog',blogSchema);
