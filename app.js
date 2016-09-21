var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Chesspiece = require('./models/chesspieces');
Chessboard = require('./models/chessboards');
Chessborder = require('./models/chessborders');



// connectie maken met mongoose
mongoose.connect('mongodb://localhost/chess');
var db = mongoose.connection;

// route voor de homepage '/' via get-request
app.get('/', function(req, res){
  res.send('Hier is niks ... probeer eens /chess/chesspieces of /chess/chessboards of /chess/chessborders ');
});

// route  voor de schaakstukken in het schaakspel
app.get('/chess/chesspieces', function(req, res){
  Chesspiece.getChesspieces(function(err, chesspieces){
    if(err){
      throw err;
    }else{
    res.json(chesspieces);
    }
  });
});

// route toevoegen schaakstuk in het schaakspel na promotie van pion
app.post('/chess/chesspieces', function(req, res){
  var pawnpromotion = req.body;
  Chesspiece.addChesspiece(pawnpromotion, function(err, pawnpromotion){
    if(err){
      throw err;
    }else{
    res.json(pawnpromotion);
    }
  });
});

// route voor enkel schaakstuk in het schaakspel
app.get('/chess/chesspieces/:_id', function(req, res){
  Chesspiece.getChesspieceById(req.params._id, function(err, chesspiece){
    if(err){
      throw err;
    }else{
    res.json(chesspiece);
    }
  });
});



// route  voor het schaakbord in het schaakspel
app.get('/chess/chessboards', function(req, res){
  Chessboard.getChessboards(function(err, chessboards){
    if(err){
      throw err;
    }else{
    res.json(chessboards);
    }
  });
});

// route  voor de rand van het schaakbord in het schaakspel
app.get('/chess/chessborders', function(req, res){
  Chessborder.getChessborders(function(err, chessborders){
    if(err){
      throw err;
    }else{
    res.json(chessborders);
    }
  });
});

// welke poort luistert de app.js
app.listen(8080);
console.log('App luistert nu naar poort 8080.');
