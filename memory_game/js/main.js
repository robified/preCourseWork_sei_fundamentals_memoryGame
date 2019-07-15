var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};


function flipcard(cardId) {
	if (cardsInPlay.length === 2) {
		
	}
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};


flipcard(0);
flipcard(1);
checkForMatch();





//	var cardOne = cards[0];
//	cardsInPlay.push(cardOne);
//	console.log("User flipped " + cardOne);


//	var cardTwo = cards[2];
//	cardsInPlay.push(cardTwo);
//	console.log("User flipped " + cardTwo);