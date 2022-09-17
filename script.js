'use strict'



// CARD LIST
const cardsList = [{
        id: 1,
        "name": 'Ace of Clubs'
    },
    {
        id: 2,
        "name": '2 of Clubs'
    },
    {
        id: 3,
        "name": '3 of Clubs'
    },
    {
        id: 4,
        "name": '4 of Clubs'
    },
    {
        id: 5,
        "name": '5 of Clubs'
    },
    {
        id: 6,
        "name": '6 of Clubs'
    },
    {
        id: 7,
        "name": '7 of Clubs'
    }, {
        id: 8,
        "name": '8 of Clubs'
    },
    {
        id: 9,
        "name": '9 of Clubs'
    },
    {
        id: 10,
        "name": '10 of Clubs'
    },
    {
        id: 11,
        "name": 'J of Clubs'
    },
    {
        id: 12,
        "name": 'Q of Clubs'
    },
    {
        id: 13,
        "name": 'K of Clubs'
    },
    {
        id: 14,
        "name": 'Ace of Diamonds'
    },
    {
        id: 15,
        "name": '2 of Diamonds'
    },
    {
        id: 16,
        "name": '3 of Diamonds'
    },
    {
        id: 17,
        "name": '4 of Diamonds'
    },
    {
        id: 18,
        "name": '5 of Diamonds'
    },
    {
        id: 19,
        "name": '6 of Diamonds'
    },
    {
        id: 20,
        "name": '7 of Diamonds'
    }, {
        id: 21,
        "name": '8 of Diamonds'
    },
    {
        id: 22,
        "name": '9 of Diamonds'
    },
    {
        id: 23,
        "name": '10 of Diamonds'
    },
    {
        id: 24,
        "name": 'J of Diamonds'
    },
    {
        id: 25,
        "name": 'Q of Diamonds'
    },
    {
        id: 26,
        "name": 'K of Diamonds'
    },

    {
        id: 27,
        "name": 'Ace of Hearts'
    },
    {
        id: 28,
        "name": '2 of Hearts'
    },
    {
        id: 29,
        "name": '3 of Hearts'
    },
    {
        id: 30,
        "name": '4 of Hearts'
    },
    {
        id: 31,
        "name": '5 of Hearts'
    },
    {
        id: 32,
        "name": '6 of Hearts'
    },
    {
        id: 33,
        "name": '7 of Hearts'
    }, {
        id: 34,
        "name": '8 of Hearts'
    },
    {
        id: 35,
        "name": '9 of Hearts'
    },
    {
        id: 36,
        "name": '10 of Hearts'
    },
    {
        id: 37,
        "name": 'J of Hearts'
    },
    {
        id: 38,
        "name": 'Q of Hearts'
    },
    {
        id: 39,
        "name": 'K of Hearts'
    },
    {
        id: 40,
        "name": 'Ace of Spades'
    },
    {
        id: 41,
        "name": '2 of Spades'
    },
    {
        id: 42,
        "name": '3 of Spades'
    },
    {
        id: 43,
        "name": '4 of Spades'
    },
    {
        id: 44,
        "name": '5 of Spades'
    },
    {
        id: 45,
        "name": '6 of Spades'
    },
    {
        id: 46,
        "name": '7 of Spades'
    }, {
        id: 47,
        "name": '8 of Spades'
    },
    {
        id: 48,
        "name": '9 of Spades'
    },
    {
        id: 49,
        "name": '10 of Spades'
    },
    {
        id: 50,
        "name": 'J of Spades'
    },
    {
        id: 51,
        "name": 'Q of Spades'
    },
    {
        id: 52,
        "name": 'K of Spades'
    },
]




// DISCARDED TRAY ARRAY
var discardCardArr = []




var gameOverSwitcher = 0;

const btnReset = document.getElementById("resetBtn"); // get the reset button

const getThrowCardBtn = document.getElementById("throwCardBtn"); // Get Throw Card btn

const getSortNumberBtn = document.getElementById("sortNumber");

const getRemainingCards = document.getElementById('remainingCards');

const getUsedCardlist = document.getElementById("usedCardsList");

var gameOverSwitcher = 0



// RESET GAME FUNCTION
function resetFunction() {
    discardCardArr = [];
    document.getElementById("usedCardsList").innerText = discardCardArr
    getThrowCardBtn.innerHTML = "Throw Card";
    getThrowCardBtn.classList.remove("disabled");
    btnReset.innerHTML = "Reset";
    gameOverSwitcher = 0;
    getSortNumberBtn.innerHTML = "Start";
    getremainingCards.innerHTML = 52 - discardCardArr.length;

    document.getElementById("card").innerHTML = 'Start'


    if (gameOverSwitcher === 1) {
        numberGenerator();
        gameOverSwitcher = 0
    }
}
btnReset.addEventListener("click", resetFunction);



// KING COUNTER

var kingCounter = 0

function kingListener(currentCard) {

    if (currentCard === 13 || currentCard === 27 || currentCard === 39 || currentCard === 52) {
        console.log('King!');
        kingCounter++;
        console.log(`KingCounter = ${kingCounter}`)
    } else {
        console.log('No King');
    }
}


// REMAINING CARDS FUNCTION
function remainingCardsfunction() {

    const remainingCards = 52 - discardCardArr.length;
    getRemainingCards.innerHTML = remainingCards;
}


// Probability to obtaing K

function probabilityK (){ // TODO Improve The algoritm

const probability = ( (kingCounter + 1) / (52 - discardCardArr.length));
document.getElementById("probabilityK").innerHTML = probability;

}





// GAME OVER FUNCTION


function gameOver() {
    getSortNumberBtn.innerText = "Game Over!"; // get the object which displays the current numbers.

    getThrowCardBtn.classList.add("disabled"); // deactivate the Trow Card Button

    btnReset.innerHTML = "Play Again"; // Mutate reset button text

    gameOverSwitcher = 1 // switch the game Over Switcher
}



// SHOW CURRENT CARD IMAGE

function showCardImg(currentNumber) {

    const nameCard = cardsList[currentNumber - 1].name;

    document.getElementById("card").innerHTML = nameCard;



}




// NUMBER GENERATOR FUNCTION



function numberGenerator() {

    var currentNumber = 0;

    // Returns a random integer from 0 to 52:
    currentNumber = Math.floor(Math.random() * (13 * 4) + 1); // get a number

    const result = discardCardArr.includes(currentNumber); // return true or false depending is the current number number match with each number of the discard tray


    if (result === true) {

        console.log(`Card ${currentNumber} is already on the discard tray`)
        discardCardArr.length < 52 ? numberGenerator() : gameOver();

    } else {

        getSortNumberBtn.innerText = currentNumber; // Show the current value of "currentNumber" in the screen
        discardCardArr.push(currentNumber); //   Push number into Cards used Array Maze
        console.log(discardCardArr); // Show the discad tray array
        getUsedCardlist.innerText = discardCardArr; // Refresh the card discarded list in the DOM.
        showCardImg(currentNumber)
        kingListener(currentNumber)
        probabilityK()
    }


    remainingCardsfunction()


}