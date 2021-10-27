class Card {
  constructor(color, value, played) {
    this.color = color;
    this.value = value;
    this.played = played;
  }
  toString() {
    return this.value + this.color;
  }
}

class Set {
  cards = new Array();
  constructor() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 9; j++) {
        this.cards.push(
          new Card(getColorByIndex(i), getValueByIndex(j), false)
        );
      }
    }
  }
}

class Player {
  cards = new Array();
}
class AI {
  cards = new Array();
}

const cardColors = {
  SPADE: "S",
  DIAMOND: "D",
  HEART: "H",
  CLUB: "C",
};

const cardValues = {
  ACE: "A",
  KING: "K",
  QUEEN: "Q",
  JACK: "J",
  TEN: "10",
  NINE: "9",
  EIGHT: "8",
  SEVEN: "7",
  SIX: "6",
};

function getColorByIndex(index) {
  switch (index) {
    case 0:
      return cardColors.SPADE;
    case 1:
      return cardColors.DIAMOND;
    case 2:
      return cardColors.HEART;
    case 3:
      return cardColors.CLUB;
  }
}
function getValueByIndex(index) {
  switch (index) {
    case 0:
      return cardValues.ACE;
    case 1:
      return cardValues.KING;
    case 2:
      return cardValues.QUEEN;
    case 3:
      return cardValues.JACK;
    case 4:
      return cardValues.TEN;
    case 5:
      return cardValues.NINE;
    case 6:
      return cardValues.EIGHT;
    case 7:
      return cardValues.SEVEN;
    case 8:
      return cardValues.SIX;
  }
}

function getRandomColor() {
  rand = Math.floor(Math.random() * 4);
  return getColorByIndex(rand);
}

function getRandomValue() {
  rand = Math.floor(Math.random() * 9);
  return getValueByIndex(rand);
}

function getCardByValueAndColor(value, color) {
  const tempSet = set.cards;
  for (let card of tempSet) {
    if (card.value == value && card.color == color) {
      return card;
    }
  }
}
