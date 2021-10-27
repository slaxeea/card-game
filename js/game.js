/*
 *  File for functions to do with main game
 *  ai turns, player turns etc.
 */
function playerPlayCard(card, element) {
  if (player.turn) {
    $("#common-card").attr("src", "images/" + card.toString() + ".svg");
    $("#common-card").css("visibility", "visible");
    element.css("visibility", "hidden");
    delete player.cards[player.cards.indexOf(card)];
    player.turn = false;
    ai1.turn = true;
    aiTurn();
  }
}

function getCardValuePlayed() {
  value = $("#common-card").attr("src").slice(7);
  value = value.slice(0, -4);
  value = value.slice(0, -1);
  return value;
}

function aiTurn() {
  if (ai1.turn) {
    aiPlayCard(ai1, 1);
    ai1.turn = false;
    ai2.turn = true;
    aiTurn();
  } else if (ai2.turn) {
    aiPlayCard(ai2, 2);
    ai2.turn = false;
  }
  player.turn = true;
}

function aiPlayCard(ai, aiIndex) {
  card = hasCardOfValue(ai, getCardValuePlayed());
  if (card != false) {
    $("#common-card").attr("src", "images/" + card.toString() + ".svg");
    $("#common-card").css("visibility", "visible");
    index = ai.cards.indexOf(card);
    $(`ai${aiIndex}-card-${index}`).css("visibility", "hidden");
    delete ai.cards[index];
  } else {
    card = randomCardFromAi(ai);
    $("#common-card").attr("src", "images/" + card.toString() + ".svg");
    $("#common-card").css("visibility", "visible");
    index = ai.cards.indexOf(card);
    $(`ai${aiIndex}-card-${index}`).css("visibility", "hidden");
    delete ai.cards[index];
  }
}

function hasCardOfValue(playerOrAi, value) {
  playerOrAi.cards.forEach((element) => {
    if (element != null) {
      if (element.value == value) {
        return card;
      }
    }
  });
  return false;
}
