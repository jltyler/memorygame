console.log("Running...");

cards = [
  {
    suit: 'hearts',
    rank: 'queen',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    suit: 'diamonds',
    rank: 'queen',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    suit: 'hearts',
    rank: 'king',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    suit: 'diamonds',
    rank: 'king',
    cardImage: 'images/king-of-diamonds.png'
  },

];
cardsInPlay = [];

function checkMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert("Sorry, try again.");
    }
    cardsInPlay = [];
  }
}

function flipCard(ind) {
  var c = cards[ind]
  cardsInPlay.push(c);
  console.log('User flipped ' + c.rank + ' of ' + c.suit);
  checkMatch();
}
