var mongoose = require('mongoose')

// schaakbordrand met letters en cijfers schema
var chessborderSchema = mongoose.Schema(
  {
  name:String,
  color:String,
  occupied:Boolean,
  withinborder:Boolean
  },{
  collection:"chessborder"
  });

var Chessborder = module.exports = mongoose.model('Chessborder', chessborderSchema);

// Get Chesspieces exporteren in module
module.exports.getChessborders = function(callback, limit){
  Chessborder.find(callback).limit(limit);
}
