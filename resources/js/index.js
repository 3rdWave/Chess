//to do: hoisting!



// CHESSBOARD Array
	// h = table headers used to display numbers and letters
	// xx = undefined, just an empty corner cell
	// A1 ... H8 correspond to chess square coordinates
	
	//use for storing current positions of chess pieces (objects)
		// use prototype to give properties: 
			//occupied:true/false 
			//type: undefined/(name chesspiece)
			
	//>>>>>>>>>>>>BEWARE: array is upside down compared to table to match [1][1] to A1, [1][2] to A2,... [8][8] to H8	<<<<<<<<<<<<	


var letterRow = ["xx", A, B, C, D, E, F, G, H]


var letterArray1 = [1, A1, B1, C1, D1, E1, F1, G1, H1]
var letterArray2 = [2, A2, B2, C2, D2, E2, F2, G2, H2]
var letterArray3 = [3, A3, B3, C3, D3, E3, F3, G3, H3]
var letterArray4 = [4, A4, B4, C4, D4, E4, F4, G4, H4]
var letterArray5 = [5, A5, B5, C5, D5, E5, F5, G5, H5]
var letterArray6 = [6, A6, B6, C6, D6, E6, F6, G6, H6]
var letterArray7 = [7, A7, B7, C7, D7, E7, F7, G7, H7]
var letterArray8 = 	[8, A8, B8, C8, D8, E8, F8, G8, H8]	

var chessBoard = [
	letterArray1, 
	letterArray2, 
	letterArray3,
	letterArray4,
	letterArray5,
	letterArray6,
	letterArray7,
	letterArray8
];	


// assigning the name of the variable in the array as a string to that variable
for(var i=0; i<8; i++){
	for(var j=0; j<8; j++){
		push.chessBoard[i][j] = "chessBoard[i][j]";
	};
};


// check if chessBoard has been constructed correctly
console.log(chessBoard);


// creating an array of array of array called chessPieces to combine all the chesspieces and using a function to assign the chesspiece objects their starting point locations
	//chessPieces = whitePieces (whiteNobles+whitePawns) + blackPieces (blackpawns + blackNobles)
	
		var whiteNobles = [
			rookWhite1, 
			horseWhite1, 
			bishopWhite1, 
			queenWhite, 
			kingWhite, 
			bishopWhite2, 
			horseWhite2, 
			rookWhite2
		];
			
		var whitePawns = [
			pawnWhite1, 
			pawnWhite2, 
			pawnWhite3, 
			pawnWhite4, 
			pawnWhite5, 
			pawnWhite6, 
			pawnWhite7, 
			pawnWhite8
		];
		
	var whitePieces = [
		whiteNobles, 
		whitePawns
	];

		var blackNobles = [
			rookBlack1, 
			horseBlack1, 
			bishopBlack1, 
			queenBlack, 
			kingBlack, 
			bishopBlack2, 
			horseBlack2, 
			rookBlack2
		];

		var blackPawns = [	
			pawnBlack1, 
			pawnBlack2, 
			pawnBlack3, 
			pawnBlack4, 
			pawnBlack5, 
			pawnBlack6, 
			pawnBlack7, 
			pawnBlack8
			];	

	var blackPieces = [
		blackPawns, 
		blackNobles
	];	

	
	
//creating the array of arrays of arrays
//chessPieces = whitePieces (whiteNobles+whitePawns) + blackPieces (blackpawns + blackNobles)
		//note that nobles>pawns>pawns>nobles are in that particular order due to the function below used to assign starting locations
var chessPieces = [
	whitePieces, 
	blackPieces
];	



// setting up the board to start the game by assigning each piece to their starting location
if(currentTurn=0){
	for(var i = 1; i<=2; i++){
		for( var j = 1; j<=8; j++){
		chessBoard[i][j] = whitePieces[i][j]
		};
	};
	for(var i = 7; i<=8; i++){
		for( var j = 1; j<=8; j++){
		chessBoard[i][j] = blackPieces[i][j]
		
		};
	};
};

if(currentTurn == 0){
	this.currentPos = this.startSquare
}



// creating objects for each chess piece >>>>>>  TO DO: 
	//try to figure out how to tackle these. 
	//update starting positions
	//function currentPos()
	//function movePiece()
	

//  >>>>>>> WHITE <<<<<<<	

	//back row white pieces
	


var rookWhite1 = {
	name: "white rook from A1",				/*for reference*/
	type: "rook",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='rookWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var horseWhite1 = {							
	name: "white horse from B1",			/*for reference*/
	type: "horse",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='horseWhite.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var bishopWhite1 = {							
	name: "white bishop from C1",			/*for reference*/
	type: "bishop",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='bishopWhite.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var queenWhite = {							
	name: "white queen from D1",			/*for reference*/
	type: "queen",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='queenWhite.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var kingWhite = {							
	name: "white queen from E1",			/*for reference*/
	type: "queen",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='kingWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var bishopWhite2 = {							
	name: "white bishop from F1",			/*for reference*/
	type: "bishop",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='bishopWhite.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var horseWhite2 = {							
	name: "white horse from G1",			/*for reference*/
	type: "horse",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='horseWhite.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var rookWhite2 = {
	name: "white rook from H1",				/*for reference*/
	type: "rook",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='rookWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

	

	
	//front row white pieces >>> pawns

var pawnWhite1 = {
	name: "white pawn from A2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite2 = {
	name: "white pawn from B2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite3 = {
	name: "white pawn from C2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 3,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite4 = {
	name: "white pawn from D2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 4,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite5 = {
	name: "white pawn from E2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 5,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite6 = {
	name: "white pawn from F2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 6,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite7 = {
	name: "white pawn from G2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 7,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnWhite8 = {
	name: "white pawn from H2",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "white",							/*to differentiate player 1 and 2*/
	number: 8,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: true,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnWhite.png'/>"		/*generic image file used for this type+color chesspiece*/
}



//  >>>>>>> BLACK <<<<<<<	

	// back row black pieces

var rookBlack1 = {
	name: "black rook from A8",				/*for reference*/
	type: "rook",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='rookBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var horseBlack1 = {							
	name: "black horse from B8",			/*for reference*/
	type: "horse",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false	,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='horseBlack.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var bishopBlack1 = {							
	name: "black bishop from C8",			/*for reference*/
	type: "bishop",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='bishopBlack.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var queenBlack = {							
	name: "black queen from D8",			/*for reference*/
	type: "queen",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='queenBlack.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var kingBlack = {							
	name: "black queen from E8",			/*for reference*/
	type: "queen",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='kingBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var bishopBlack2 = {							
	name: "black bishop from F8",			/*for reference*/
	type: "bishop",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='bishopBlack.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var horseBlack2 = {							
	name: "black horse from G8",			/*for reference*/
	type: "horse",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='horseBlack.png'/>"	/*generic image file used for this type+color chesspiece*/
}

var rookBlack2 = {
	name: "black rook from H8",				/*for reference*/
	type: "rook",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,						/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='rookBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}




	//second row black pieces >>> pawns

var pawnBlack1 = {
	name: "black pawn from A7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 1,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack2 = {
	name: "black pawn from B7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 2,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack3 = {
	name: "black pawn from C7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 3,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack4 = {
	name: "black pawn from D7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 4,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack5 = {
	name: "black pawn from E7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 5,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack6 = {
	name: "black pawn from F7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 6,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack7 = {
	name: "black pawn from G7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 7,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}

var pawnBlack8 = {
	name: "black pawn from H7",				/*for reference*/
	type: "pawn",							/*to differantiate type of chesspiece*/
	color: "black",							/*to differentiate player 1 and 2*/
	number: 8,								/*to differentiate between similar type+color pieces, e.g. pawn 1, pawn 2, etc*/
	startSquare: chessBoard.slice(),		/*position in array at start of the game*/
	currentPos: currentPos(),				/*function to check current position in chessboard array*/
	movePiece: movePiece(),					/*function for optional moves*/
	activePlayer: false,					/*boolean return from function?: true = active, false = inactive*/
	image: "<img src='pawnBlack.png'/>"		/*generic image file used for this type+color chesspiece*/
}




//stating initial turn value at loading the game
currentTurn=0;


/*highlighting selected square using onclick in html. Used to select piece you want to move in your turn
	>>> try to find a way to revert the cell color back once another table cell is chosen
	>>> try to restrict the highlighting to occupied chess coordinates
	>>> once a piece is highlighted, use a function to display the possible locations that chesspiece can move to 
		by highlighting the corresponding table cells in another color (green?)*/
function highlightSquare(){
	cell.style.color = "blue";
	};


//trying to create a function that displays the image file in the chessBoard-table at their starting point and 
	//updates the position of that image after every move
function displayPiece() {
    document.getElementById("a8").innerHTML = '<img src="pawnBlack.png">';
	};

	
//assinging the initial current position of chesspieces objects to their starting position 	
function currentPos(){
	if(this.currentTurn == 0){
		this.currentPos = this.startSquare;
	};
}


	
// white pieces movements
	
	// pawns
		// if on their starting position, they can move one or two spaces forward. Otherwise they can move 1 space forward.
for(var i=1; i<8; i++){
	if(pawnWhite+i.currentPos == startSquare){
	movePiece = [this.currentPos [+1][0], this.currentPos [+2][0]];
	function highlightMove(movePiece){
		cell.style.color = "green";
		};
	}else[movePiece = [this.currentPos [+1][0]];
}	
		//after a move is executed, if a pawn meets another pawn diagonally in front of them 
		//either on the end position after the move, or during the move 
		//(halfway when moving 2 spaces forward from the starting position), 
		//they can strike it down and take their place 
	

// black pieces movements (check white above and adjust to go opposite direction of white)	
	//..
	
	
//set pieces to starting position			
if (turn === 0){
	
}			

//display optional moves for pieces when mouseOver


//select a chesspiece to move


//select a destination for the selected chesspiece


//confirm move for selected chesspiece


//check for additional rules and optional moves:

	/*a pawn that reaches any cell of the opposite side can be switched for a chesspiece that was lost previously in battle*/

	/*castling (move both rook and king past eachother at the same time):
	- it must be that king’s very first move
	- it must be that rook’s very first move
	- there cannot be any pieces between the king and rook to move
	- the king may not be in check or pass through check
		//note: each side has 1 king and 2 rooks, makes for 4 scenarios if all checks are passed
	*/

	
	
//end of turn: validate if turn should indeed be passed?
//initiate following checks upon clicking the button 'end turn'


	//add the confirmed move to the list(logMessages) on the right side
	
var logMessages = new Array();
var logMove[currentTurn] = currentPlayer + " moved " + currentPiece + " from " + startPos + " to " + endPos + ".";
logMessages += [logMoves + "\n";];

function logMoves(){
	for (var i = 0; i < logMessages.length; i++);
    document.write(logMessages[i]); 
}
	

	// switch active player
		// alert turn has passed to other player 
			// (activePlayer with boolean:true is white, actiePlayer with boolean:false is black)
function switchPlayer(activePlayer, currentTurn){
	if(activePlayer == true){
		alert("Passing the turn to player " + player2 + "!");
		currentTurn++;
		activePlayer = false;
		}
	else{
		alert("Passing the turn to player " + player1 + "!");
		currentTurn++;
		activePlayer = true;}
		};
};	

