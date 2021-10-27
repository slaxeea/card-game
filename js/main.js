/*
*  Mainfile, all the functions to initialize the game
*  Uses functions from the other files
*/
function init() {
  set = new Set();
  initCards();
}

function initCards() {
  player = new Player();
  ai1 = new AI();
  ai2 = new AI();

  for (let i = 0; i < 5; i++) {
    card = randomCardThatHasNotBeenPlayed();
    $(`#player-card-${i}`).attr("src", "images/" + card.toString() + ".svg");
    card.played = true;
    this.player.cards.push(card);
  }
  for (let i = 0; i < 5; i++) {
    card = randomCardThatHasNotBeenPlayed();
    card.played = true;
    this.ai1.cards.push(card);
  }
  for (let i = 0; i < 5; i++) {
    card = randomCardThatHasNotBeenPlayed();
    card.played = true;
    this.ai2.cards.push(card);
  }
  
}

function randomCardThatHasNotBeenPlayed() {
  while (true) {
    rand = Math.floor(Math.random() * 36);
    if (!set.cards[rand].played) {
      return set.cards[rand];
    }
  }
}
