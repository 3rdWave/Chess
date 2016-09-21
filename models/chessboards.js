var mongoose = require('mongoose')

// schaakbord schema
var chessboardSchema = new mongoose.Schema(
  {
  name:String,
  letterloc:String,
  numberloc:Number,
  color:String,
  occupied:Boolean,
  occupiedby:String,
  withinborder:Boolean
  },{
  collection:"chessboard"
  });

var Chessboard = module.exports = mongoose.model('Chessboard', chessboardSchema);

// Get Chessboard exporteren in module
module.exports.getChessboards = function(callback, limit){
  Chessboard.find(callback).limit(limit);
}
