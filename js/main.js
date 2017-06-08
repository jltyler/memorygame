console.log("Running...");

// Card definitions
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
  }
];
cardsInPlay = [];

// Check if cardsInPlay contains a match
function checkMatch() {
  if (cardsInPlay.length >= 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert('You found a match!');
    } else {
      alert("Sorry, try again.");
    }
    cardsInPlay = []; // Clear the cardsInPlay array
  }
}

// Flip card to hook into click event
function flipCard() {
  var i = this.getAttribute('data-id');
  var c = cards[i];
  cardsInPlay.push(c);
  this.setAttribute('src', c.cardImage)
  console.log('User flipped ' + c.rank + ' of ' + c.suit);
  checkMatch();
}

// Create playing field and cards and attach events to them
function createBoard() {
  var game = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
    var new_card = document.createElement('img');
    new_card.setAttribute('src', 'images/back.png');
    new_card.setAttribute('data-id', i);
    new_card.addEventListener('click', flipCard);
    game.appendChild(new_card);
  }
}

// Time to run the actual code
createBoard()
