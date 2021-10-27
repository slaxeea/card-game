function playerPlayCard(card, element) {
  if (card.value == getCardValuePlayed()) {
    $("#common-card").attr("src", "images/" + card.toString() + ".svg");
    $("#common-card").css("visibility", "visible");
    element.css("visibility", "hidden");
    delete player.cards[player.cards.indexOf(card)];
  }
}

function getCardValuePlayed() {
  value = $("#common-card").attr("src").slice(7);
  value = value.slice(0, -4);
  value = value.slice(0, -1);
  return value;
}
