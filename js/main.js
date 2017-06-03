console.log("Running...");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

flipA = cards[0];
cardsInPlay.push(flipA);
console.log("User flipped " + flipA);

flipB = cards[1];
cardsInPlay.push(flipB);
console.log("User flipped " + flipB);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
