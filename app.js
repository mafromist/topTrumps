/* import { createCards } from 'newData';


 */ /*Background about the game
The game is played taking turns between one players’ hand of 15 cards 
    AND the other player’s hand. 

The cards have statistics on them which will allow the user to pick an attribute 
    AND compare that attribute with the other players’ top card; 

whoever has the strongest chosen attribute, wins both cards. 

If the values are the same, 
    both cards go into limbo and whoever wins the next hand,
    wins the limbo cards and the ones just battled. 

The winning player of the hand continues to choose until they lose.

*/
/*
const { current } = require("tap");
*/
// 30 cards random HarryP characters with 5 attributes fetched from data.csv
//add imgs links into csv
// creating 2 players
// choose attributes who has the turn
// the biggest attributes score will win
// the winner takes others card and continue the turn
//if attributes are equal both cards go to limbo
// the limbo will be add into the winner score in the next round

//MILD - create a player and give random cards and compare the attribute with the created second card
//give random numbers to the attribute
// add score to the player1Score

//DOM selection from HTML for player and chosen card and an attribute

const p1charName = document.querySelector("#p1charName");
const charImg1 = document.querySelector("#charImg1");
const p1magicLevel = document.querySelector("#p1magicLevel");
const p1cunningLevel = document.querySelector("#p1cunningLevel");
const p1courageLevel = document.querySelector("#p1courageLevel");
const p1wisdomLevel = document.querySelector("#p1wisdomLevel");
const p1temperLevel = document.querySelector("#p1temperLevel");
const player1Score = document.querySelector("#p1Score");

const p2charName = document.querySelector("#p2charName");
const charImg2 = document.querySelector("#charImg2");
const p2magicLevel = document.querySelector("#p2magicLevel");
const p2cunningLevel = document.querySelector("#p2cunningLevel");
const p2courageLevel = document.querySelector("#p2courageLevel");
const p2wisdomLevel = document.querySelector("#p2wisdomLevel");
const p2temperLevel = document.querySelector("#p2temperLevel");
const player2Score = document.querySelector("#p2Score");

const levels = document.querySelectorAll(".levels");

const newGameBtn = document.querySelector("#newGameBtn");

const p1Cont = document.querySelector("#p1Cont");
const p2Cont = document.querySelector("#p2Cont");

const p1Details = document.querySelector("#player1");
const p2Details = document.querySelector("#player2");

const newCardBtn = document.querySelector("#nextCardBtn");

let turnStatus = document.querySelector("#turnStatus");

const levelAttrs = document.querySelectorAll(".levelAttributes");

//Start and New Game button
//define players and score

let currentPlayer;
let pScore1 = 0;
let pScore2 = 0;
let tieScore = 0;
let round = 0;

const pickAPlayer = () => Math.round(Math.random() + 1);

const hideCard = () => {
  if (currentPlayer === 1) {
    p2Cont.classList.add("hideCard");
    p1Cont.classList.remove("hideCard");
    p2Details.style.display = "none";
    p1Details.style.display = "block";
    newCardBtn.style.display = "none";
  } else {
    p1Cont.classList.add("hideCard");
    p2Cont.classList.remove("hideCard");
    p1Details.style.display = "none";
    p2Details.style.display = "block";
    newCardBtn.style.display = "none";
  }
};

const drawP1Card = () => {
  p1charName.textContent = name1;
  charImg1.src = img1;
  charImg1.alt = name1;
};

levels[0].dataset.level.value = magicLevel1;
levels[1].dataset.level.value = cunningLevel1;
levels[2].dataset.level.value = courageLevel1;
levels[3].dataset.level.value = wisdomLevel1;
levels[4].dataset.level.value = temperLevel1;

levels[5].dataset.level.textContent = magicLevel2;
levels[6].dataset.level.textContent = cunningLevel2;
levels[7].dataset.level.textContent = courageLevel2;
levels[8].dataset.level.textContent = wisdomLevel2;
levels[9].dataset.level.textContent = temperLevel2;

console.log(levels);
console.log(levels[0].dataset.type);
console.log(levels[0].dataset.level);
console.log(magicLevel1);
console.log(levels[0].dataset.level);
console.log(levels[0].dataset.level.value);

const drawP2Card = () => {
  p2charName.textContent = currentCard2.name;
  charImg2.src = currentCard2.imgs;
  charImg2.alt = currentCard2.name;
  p2magicLevel.textContent = currentCard2.magic;
  p2cunningLevel.textContent = currentCard2.cunning;
  p2courageLevel.textContent = currentCard2.courage;
  p2wisdomLevel.textContent = currentCard2.wisdom;
  p2temperLevel.textContent = currentCard2.temper;
};

const gameInit = () => {
  currentPlayer = pickAPlayer();
  drawP1Card();
  drawP2Card();
  hideCard();
  pScore1 = 0;
  pScore2 = 0;
  tieScore = 0;
  round = 0;
  turnStatus.textContent = `Player ${currentPlayer}`;
  console.log(currentPlayer);
};

const revealCard = () => {
  p2Cont.classList.remove("hideCard");
  p2Details.style.display = "block";
  p1Cont.classList.remove("hideCard");
  p1Details.style.display = "block";
  newCardBtn.style.display = "block";
};

/* const winnerHand = (a, b) => {
  if (a > b) {
    alert("P1 won the turn");
    pScore1 += 1;
    player1Score.textContent = `${pScore1}`;
    currentPlayer = 1;
  } else if (b > a) {
    alert("P2 won the turn");
    pScore2 += 1;
    player2Score.textContent = `${pScore2}`;
    currentPlayer = 2;
  } else {
    alert("Tie!");
    tieScore++;
    console.log(currentPlayer);
  }
}; */

//newCardBtn Function
// step 1 - check currentPlayer
// step 2 - hide other player's card
// step 3 - draw new cards for each player
// step 4 - if there is tieScore add it to the currentPlayer
// step 5 - if currentPlayer lost change the currentPlayer to opposite
// step 6 - add to round value + 1

const winnerHand = (a, b) => {
  const drawNewCards = () => {
    newCardBtn.addEventListener("click", () => {
      getNextCards();
      if (currentPlayer == 1) {
        hideCard();
        drawP1Card();
        drawP2Card();
        p1Score += tieScore;
      } else {
        hideCard();
        drawP1Card();
        drawP2Card();
        p2Score += tieScore;
      }
      round++;
    });
  };
};

///// FUNCTIONS TO COMPARE THE LEVELS

const selectAttributes = () => {
  if (currentPlayer == 1) {
    levelAttrs[0].children.forEach((selection, i) => {
      levelAttrs[0].children[i].addEventListener("click", () => {
        winnerHand(currentCard1[0][selection], currentCard2[0][selection]);
        console.log(currentCard1[0][selection]);
        revealCard();
      });
    });

    if (currentPlayer === 2) {
      levelAttrs[1].children.forEach((selection, i) => {
        levelAttrs[0].children[i].addEventListener("click", () => {
          winnerHand(currentCard1[i][selection], currentCard2[i][selection]);
          revealCard();
        });
      });
    }
  }
};

newGameBtn.addEventListener("click", () => {
  createCards();
  gameInit();
  newCardBtn.style.display = "none";
});

newCardBtn.addEventListener("click", () => {
  if (round < 15) {
    selectAttributes();
  } else {
    if (p1Score > p2Score) {
      alert("P1 WINS!");
    } else {
      alert("P2 WINS!");
    }
  }
});

/*   const playGame = () => {
    gameInit();
    if (round < 15) {
      selectAttributes();
      drawNewCards();
    } else {
      if (p1Score > p2Score) {
        alert("P1 WINS!");
      } else {
        alert("P2 WINS!");
      }

    }
  }

  playGame(); */

/*

const checkMagicLevel = () => {
  if (currentPlayer === 1) {
    levelAttrs[0].children[0].addEventListener("click", () => {
      winnerHand(currentCard1.magic, currentCard2.magic);
      revealCard();
    });
  } else {
    levelAttrs[1].children[0].addEventListener("click", () => {
      winnerHand(currentCard1.magic, currentCard2.magic);
      revealCard();
    });
  }
};

checkMagicLevel();

//Cunning Level Comparison

const checkCunningLevel = () => {
  if (currentPlayer === 1) {
    levelAttrs[0].children[1].addEventListener("click", () => {
      winnerHand(currentCard1.cunning, currentCard2.cunning);
      revealCard();
    });
  } else {
    levelAttrs[1].children[1].addEventListener("click", () => {
      winnerHand(currentCard1.cunning, currentCard2.cunning);
      revealCard();
    });
  }
};

checkCunningLevel();

//Courage Level Comparison

const checkCourageLevel = () => {
  if (currentPlayer === 1) {
    levelAttrs[0].children[2].addEventListener("click", () => {
      winnerHand(currentCard1.courage, currentCard2.courage);
      revealCard();
    });
  } else {
    levelAttrs[1].children[2].addEventListener("click", () => {
      winnerHand(currentCard1.courage, currentCard2.courage);
      revealCard();
    });
  }
};

checkCourageLevel();

//Wisdom Level Comparison

const checkWisdomLevel = () => {
  if (currentPlayer === 1) {
    levelAttrs[0].children[3].addEventListener("click", () => {
      winnerHand(currentCard1.wisdom, currentCard2.wisdom);
      revealCard();
    });
  } else {
    levelAttrs[1].children[3].addEventListener("click", () => {
      winnerHand(currentCard1.wisdom, currentCard2.wisdom);
      revealCard();
    });
  }
};

checkWisdomLevel();

//Temper Level Comparison

const checkTemper = document.querySelectorAll(".temper");

const checkTemperLevel = () => {
  if (currentPlayer === 1) {
    levelAttrs[0].children[4].addEventListener("click", () => {
      winnerHand(currentCard1.wisdom, currentCard2.wisdom);
      revealCard();
    });
  } else {
    levelAttrs[1].children[4].addEventListener("click", () => {
      winnerHand(currentCard1.wisdom, currentCard2.wisdom);
      revealCard();
    });
  }
};
checkTemperLevel(); */

//it doesn't change the card after the result
//also only magic button works but it give error as well

///// JS TIPS /////

// changing the src of an Img property => charImg1.src = "../topTrumps/img/argusFilch.jpg"

/* extras
    //add a class to close the card so whose turn cannot see the other card
        therefore the game could be more enjoyable if you won't see the other card values

*/

////Old version of level comparison functions

//Magic Level Comparison
/* const compareMagicLevel = () => {
  if (currentCard1.magic > currentCard2.magic) {
    alert("P1 won the turn");
    pScore1 += 1;
    player1Score.textContent = `${pScore1}`;
    currentPlayer = 1;
    console.log(currentPlayer);
  } else if (currentCard2.magic > currentCard1.magic) {
    alert("P2 won the turn");
    pScore2 += 1;
    player2Score.textContent = `${pScore2}`;
    currentPlayer = 2;
    console.log(currentPlayer);
  } else {
    alert("Tie!");
    tieScore++;
    console.log(currentPlayer);
  }
}; */

// levelAttrs functionality
