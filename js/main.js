console.log("Running...");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

function checkMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
    cardsInPlay = [];
  }
}

function flipCard(ind) {
  cardsInPlay.push(cards[ind]);
  console.log("User flipped " + cards[ind] + " (cards[" + ind + "])");
  checkMatch();
}
