var mongoose = require('mongoose')

// schaakstukken schema
var chesspieceSchema = new mongoose.Schema(
  {
  name:String,
  position:String,
  type:String,
  color:String,
  number:Number,
  image:String
  },{
  collection:'chesspieces'
  });

var Chesspiece = module.exports = mongoose.model('Chesspiece', chesspieceSchema);

// Get Chesspiecess exporteren in module
module.exports.getChesspieces = function(callback, limit){
  Chesspiece.find(callback).limit(limit);
};

// Get Chesspiece exporteren in module
module.exports.getChesspieceById = function(id, callback){
  Chesspiece.findById(id, callback);
};

// schaakstuk toevoegen nadat pion rank 8 haalt: promotie naar bv tweede koningin
module.exports.addChesspiece = function(pawnpromotion, callback){
  Chesspiece.create(pawnpromotion, callback);
};