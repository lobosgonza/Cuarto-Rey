"use strict";

// CARD LIST
const cardsList = [
  {
    id: 1,
    name: "Ace of Clubs",
    src: "./cards-assets/ace_of_clubs.svg",
  },
  {
    id: 2,
    name: "2 of Clubs",
    src: "./cards-assets/2_of_clubs.svg",
  },
  {
    id: 3,
    name: "3 of Clubs",
    src: "./cards-assets/3_of_clubs.svg",
  },
  {
    id: 4,
    name: "4 of Clubs",
    src: "./cards-assets/4_of_clubs.svg",
  },
  {
    id: 5,
    name: "5 of Clubs",
    src: "./cards-assets/5_of_clubs.svg",
  },
  {
    id: 6,
    name: "6 of Clubs",
    src: "./cards-assets/6_of_clubs.svg",
  },
  {
    id: 7,
    name: "7 of Clubs",
    src: "./cards-assets/7_of_clubs.svg",
  },
  {
    id: 8,
    name: "8 of Clubs",
    src: "./cards-assets/8_of_clubs.svg",
  },
  {
    id: 9,
    name: "9 of Clubs",
    src: "./cards-assets/9_of_clubs.svg",
  },
  {
    id: 10,
    name: "10 of Clubs",
    src: "./cards-assets/10_of_clubs.svg",
  },
  {
    id: 11,
    name: "J of Clubs",
    src: "./cards-assets/jack_of_clubs.svg",
  },
  {
    id: 12,
    name: "Q of Clubs",
    src: "./cards-assets/queen_of_clubs.svg",
  },
  {
    id: 13,
    name: "K of Clubs",
    src: "./cards-assets/king_of_clubs.svg",
  },
  {
    id: 14,
    name: "Ace of Diamonds",
    src: "./cards-assets/ace_of_diamonds.svg",
  },
  {
    id: 15,
    name: "2 of Diamonds",
    src: "./cards-assets/2_of_diamonds.svg",
  },
  {
    id: 16,
    name: "3 of Diamonds",
    src: "./cards-assets/3_of_diamonds.svg",
  },
  {
    id: 17,
    name: "4 of Diamonds",
    src: "./cards-assets/4_of_diamonds.svg",
  },
  {
    id: 18,
    name: "5 of Diamonds",
    src: "./cards-assets/5_of_diamonds.svg",
  },
  {
    id: 19,
    name: "6 of Diamonds",
    src: "./cards-assets/6_of_diamonds.svg",
  },
  {
    id: 20,
    name: "7 of Diamonds",
    src: "./cards-assets/7_of_diamonds.svg",
  },
  {
    id: 21,
    name: "8 of Diamonds",
    src: "./cards-assets/8_of_diamonds.svg",
  },
  {
    id: 22,
    name: "9 of Diamonds",
    src: "./cards-assets/9_of_diamonds.svg",
  },
  {
    id: 23,
    name: "10 of Diamonds",
    src: "./cards-assets/10_of_diamonds.svg",
  },
  {
    id: 24,
    name: "J of Diamonds",
    src: "./cards-assets/jack_of_diamonds.svg",
  },
  {
    id: 25,
    name: "Q of Diamonds",
    src: "./cards-assets/queen_of_diamonds.svg",
  },
  {
    id: 26,
    name: "K of Diamonds",
    src: "./cards-assets/king_of_diamonds.svg",
  },

  {
    id: 27,
    name: "Ace of Hearts",
    src: "./cards-assets/ace_of_hearts.svg",
  },
  {
    id: 28,
    name: "2 of Hearts",
    src: "./cards-assets/2_of_hearts.svg",
  },
  {
    id: 29,
    name: "3 of Hearts",
    src: "./cards-assets/3_of_hearts.svg",
  },
  {
    id: 30,
    name: "4 of Hearts",
    src: "./cards-assets/4_of_hearts.svg",
  },
  {
    id: 31,
    name: "5 of Hearts",
    src: "./cards-assets/5_of_hearts.svg",
  },
  {
    id: 32,
    name: "6 of Hearts",
    src: "./cards-assets/6_of_hearts.svg",
  },
  {
    id: 33,
    name: "7 of Hearts",
    src: "./cards-assets/7_of_hearts.svg",
  },
  {
    id: 34,
    name: "8 of Hearts",
    src: "./cards-assets/8_of_hearts.svg",
  },
  {
    id: 35,
    name: "9 of Hearts",
    src: "./cards-assets/9_of_hearts.svg",
  },
  {
    id: 36,
    name: "10 of Hearts",
    src: "./cards-assets/10_of_hearts.svg",
  },
  {
    id: 37,
    name: "J of Hearts",
    src: "./cards-assets/jack_of_hearts.svg",
  },
  {
    id: 38,
    name: "Q of Hearts",
    src: "./cards-assets/queen_of_hearts.svg",
  },
  {
    id: 39,
    name: "K of Hearts",
    src: "./cards-assets/king_of_hearts.svg",
  },
  {
    id: 40,
    name: "Ace of Spades",
    src: "./cards-assets/ace_of_spades.svg",
  },
  {
    id: 41,
    name: "2 of Spades",
    src: "./cards-assets/2_of_spades.svg",
  },
  {
    id: 42,
    name: "3 of Spades",
    src: "./cards-assets/3_of_spades.svg",
  },
  {
    id: 43,
    name: "4 of Spades",
    src: "./cards-assets/4_of_spades.svg",
  },
  {
    id: 44,
    name: "5 of Spades",
    src: "./cards-assets/5_of_spades.svg",
  },
  {
    id: 45,
    name: "6 of Spades",
    src: "./cards-assets/6_of_spades.svg",
  },
  {
    id: 46,
    name: "7 of Spades",
    src: "./cards-assets/7_of_spades.svg",
  },
  {
    id: 47,
    name: "8 of Spades",
    src: "./cards-assets/8_of_spades.svg",
  },
  {
    id: 48,
    name: "9 of Spades",
    src: "./cards-assets/9_of_spades.svg",
  },
  {
    id: 49,
    name: "10 of Spades",
    src: "./cards-assets/10_of_spades.svg",
  },
  {
    id: 50,
    name: "J of Spades",
    src: "./cards-assets/jack_of_spades.svg",
  },
  {
    id: 51,
    name: "Q of Spades",
    src: "./cards-assets/queen_of_spades.svg",
  },
  {
    id: 52,
    name: "K of Spades",
    src: "./cards-assets/king_of_spades.svg",
  },
];

// DISCARDED TRAY ARRAY
var discardCardArr = [];

var gameOverSwitcher = 0;

const btnReset = document.getElementById("resetBtn"); // get the reset button

const getThrowCardBtn = document.getElementById("throwCardBtn"); // Get Throw Card btn

const getSortNumberBtn = document.getElementById("sortNumber");

const getRemainingCards = document.getElementById("remainingCards");

const getUsedCardlist = document.getElementById("usedCardsList");

const getImageContainer = document.getElementById("imageContainer");

// const getCardName = document.getElementById("card");

const getKProbability = document.getElementById("probabilityK");

var gameOverSwitcher = 0;

//SHOW THE CORRESPONDING IMAGE

function showImg(card) {
  getImageContainer.src = card.src;
}

// Refresh the card discarded list in the DOM.

function refreshCardDiscarded() {
  getUsedCardlist
    ? (getUsedCardlist.innerText = discardCardArr)
    : console.log("remainingCards Id doesnt exists");
}

// RESET GAME FUNCTION
function resetFunction() {
  discardCardArr = [];
  refreshCardDiscarded();
  getThrowCardBtn.innerHTML = "Throw Card";
  getThrowCardBtn.classList.remove("disabled");
  btnReset.innerHTML = "Reset";
  gameOverSwitcher = 0;
  getSortNumberBtn.innerHTML = "Start";
  getRemainingCards.innerHTML = 52 - discardCardArr.length;
  getImageContainer.src = "./cards-assets/back.png";
  probabilityK();

  //   getCardName.innerHTML = "Start";

  if (gameOverSwitcher === 1) {
    numberGenerator();
    gameOverSwitcher = 0;
  }
}
btnReset.addEventListener("click", resetFunction);

// KING COUNTER

var kingCounter = 0;

function kingListener(currentCard) {
  if (
    currentCard === 13 ||
    currentCard === 27 ||
    currentCard === 39 ||
    currentCard === 52
  ) {
    console.log("King!");
    kingCounter++;
    console.log(`KingCounter = ${kingCounter}`);
  } else {
    console.log("No King");
  }
}

// REMAINING CARDS FUNCTION
function remainingCardsfunction() {
  const remainingCards = 52 - discardCardArr.length;
  getRemainingCards.innerHTML = remainingCards;
}

// Probability to obtaing K

function probabilityK() {
  // TODO Improve The algoritm

  const probability = (kingCounter + 1) / (51 - discardCardArr.length);
  const probabiliyRounded = (probability * 100).toFixed(2) + "%";

  getKProbability.innerHTML = probabiliyRounded;
}

// GAME OVER FUNCTION

function gameOver() {
  //   getRemainingCards.innerText = "0";
  getSortNumberBtn.innerText = "Game Over!"; // get the object which displays the current numbers.

  getThrowCardBtn.classList.add("disabled"); // deactivate the Trow Card Button

  btnReset.innerHTML = "Play Again"; // Mutate reset button text

  gameOverSwitcher = 1; // switch the game Over Switcher

  getKProbability.innerHTML = "Game over";

  kingCounter = 0;
}

// SHOW CURRENT CARD IMAGE

function showCardImg(currentNumber) {
  const nameCard = cardsList[currentNumber - 1].name;

  //   getCardName.innerHTML = nameCard;

  showImg(cardsList[currentNumber - 1]);
}

// NUMBER GENERATOR FUNCTION

function numberGenerator() {
  var currentNumber;

  // Returns a random integer from 0 to 52:
  currentNumber = Math.floor(Math.random() * (13 * 4) + 1); // get a number

  const result = discardCardArr.includes(currentNumber); // return true or false depending is the current number number match with each number of the discard tray

  if (result === true) {
    console.log(`Card ${currentNumber} is already on the discard tray`);
    discardCardArr.length < 52 ? numberGenerator() : gameOver();
  } else {
    getSortNumberBtn.innerText = cardsList[currentNumber - 1].name; // Show the current value of "currentNumber" in the screen
    discardCardArr.push(currentNumber); //   Push number into Cards used Array Maze
    console.log(discardCardArr); // Show the discad tray array
    refreshCardDiscarded();
    showCardImg(currentNumber);
    kingListener(currentNumber);
    probabilityK();
    remainingCardsfunction();

    discardCardArr.length === 52
      ? gameOver()
      : console.log(`-- End of Turn ${discardCardArr.length} --`);
  }
  if (kingCounter === 4) {
    gameOver();
  }
}
