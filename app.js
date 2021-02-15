/*Background about the game
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


//DOM selection from HTML for player and choosen card and an attribute
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

//Start and New Game button
//define players and score

let currentPlayer;

const pickAPlayer = () => Math.round(Math.random() + 1);


let pScore1 = 0;
let pScore2 = 0;

const newGameBtn = document.querySelector("#newGameBtn");

const p1Cont = document.querySelector("#p1Cont");
const p2Cont = document.querySelector("#p2Cont");

const p1Details = document.querySelector("#player1");
const p2Details = document.querySelector("#player2");

let turnStatus = document.querySelector("#turnStatus");

newGameBtn.addEventListener('click', event => {
    window.location.reload();
});

const hideCard = () => {
    if(currentPlayer === 1) {
        p2Cont.classList.add("hideCard");
        p2Details.style.display = "none";
    } else {
        p1Cont.classList.add("hideCard");
        p1Details.style.display = "none";
    }
}

const gameInit = () => {
    currentPlayer = pickAPlayer();
    hideCard();
    turnStatus.textContent = `Player ${currentPlayer}`;
    console.log(currentPlayer);
}

gameInit();

p1charName.textContent = currentCard1.name;
charImg1.src = currentCard1.imgs;
charImg1.alt = currentCard1.name;
p1magicLevel.textContent = currentCard1.magic;
p1cunningLevel.textContent = currentCard1.cunning;
p1courageLevel.textContent = currentCard1.courage;
p1wisdomLevel.textContent = currentCard1.wisdom;
p1temperLevel.textContent = currentCard1.temper;

p2charName.textContent = currentCard2.name;
charImg2.src = currentCard2.imgs;
charImg2.alt = currentCard2.name;
p2magicLevel.textContent = currentCard2.magic;
p2cunningLevel.textContent = currentCard2.cunning;
p2courageLevel.textContent = currentCard2.courage;
p2wisdomLevel.textContent = currentCard2.wisdom;
p2temperLevel.textContent = currentCard2.temper;





/*
// OLD MINDSET CODES 




// Game Rules for Win and Lose - compare and add score and delete the card

///// FUNCTION TO COMPARE THE LEVELS

//Magic 
const compareMagicLevel = () => {
        if(p1.magic > p2.magic) {
            alert("P1 won the turn");
            pScore1 += 1;
            player1Score.textContent = `${pScore1}`;
            currentPlayer = 1;
            console.log(currentPlayer);
        } else if (p2.magic > p1.magic) {
            alert("P2 won the turn");
            pScore2 += 1;
            player2Score.textContent = `${pScore2}`;
            currentPlayer = 2;
            console.log(currentPlayer);
        } else {
            alert("Tie!");
            console.log(currentPlayer);
        }
}  

//Cunning 
const compareCunningLevel = () => {
        if(p1.cunning > p2.cunning) {
            alert("P1 won the turn");
            pScore1 += 1;
            player1Score.textContent = `${pScore1}`;
            currentPlayer = 1;
            console.log(currentPlayer);
        } else if (p2.cunning > p1.cunning) {
            alert("P2 won the turn");
            pScore2 += 1;
            player2Score.textContent = `${pScore2}`;
            currentPlayer = 2;
            console.log(currentPlayer);
        } else {
            alert("Tie!");
            console.log(currentPlayer);
        }
}  

//Courage
const compareCourageLevel = () => {
        if(p1.courage > p2.courage) {
            alert("P1 won the turn");
            pScore1 += 1;
            player1Score.textContent = `${pScore1}`;
            currentPlayer = 1;
            console.log(currentPlayer);
        } else if (p2.courage > p1.courage) {
            alert("P2 won the turn");
            pScore2 += 1;
            player2Score.textContent = `${pScore2}`;
            currentPlayer = 2;
            console.log(currentPlayer);
        } else {
            alert("Tie!");
            console.log(currentPlayer);
        }
}  

//Wisdom 
const compareWisdomLevel = () => {
        if(p1.wisdom > p2.wisdom) {
            alert("P1 won the turn");
            pScore1 += 1;
            player1Score.textContent = `${pScore1}`;
            currentPlayer = 1;
            console.log(currentPlayer);
        } else if (p2.wisdom > p1.wisdom) {
            alert("P2 won the turn");
            pScore2 += 1;
            player2Score.textContent = `${pScore2}`;
            currentPlayer = 2;
            console.log(currentPlayer);
        } else {
            alert("Tie!");
            console.log(currentPlayer);
        }
}  

//Temper
const compareTemperLevel = () => {
        if(p1.temper > p2.temper) {
            alert("P1 won the turn");
            pScore1 += 1;
            player1Score.textContent = `${pScore1}`;
            currentPlayer = 1;
            console.log(currentPlayer);
        } else if (p2.temper > p1.temper) {
            alert("P2 won the turn");
            pScore2 += 1;
            player2Score.textContent = `${pScore2}`;
            currentPlayer = 2;
            console.log(currentPlayer);
        } else {
            alert("Tie!");
            console.log(currentPlayer);
        }
}  

//// CLICK EVENTS FOR COMPARISON FUNCTIONS

//Magic Level Comparison

const checkMagic = document.getElementsByClassName(".magic");

const checkMagicLevel = () => {
    if(currentPlayer === 1) {
        checkMagic[0].addEventListener("click", () => {
        compareMagicLevel();
    })
    } else {
        checkMagic[1].addEventListener("click", () => {
        compareMagicLevel();
    })
    }
}

//Cunning Level Comparison

const checkCunning = document.querySelectorAll(".cunning");

const checkCunningLevel = () => {
    if(currentPlayer === 1) {
        checkCunning[0].addEventListener("click", () => {
        compareCunningLevel();
        })
    } else {
        checkCunning[1].addEventListener("click", () => {
        compareCunningLevel();
        })
    }
}

//Courage Level Comparison

const checkCourage = document.querySelectorAll(".courage");

const checkCourageLevel = () => {
    if(currentPlayer === 1) {
        checkCourage[0].addEventListener("click", () => {
        compareCourageLevel();
        })
    } else {
        checkCourage[1].addEventListener("click", () => {
        compareCourageLevel();
        })
    }
}

//Wisdom Level Comparison

const checkWisdom = document.querySelectorAll(".wisdom");

const checkWisdomLevel = () => {
    if(currentPlayer === 1) {
        checkWisdom[0].addEventListener("click", () => {
        compareWisdomLevel();
    })
    } else {
        checkWisdom[1].addEventListener("click", () => {
        compareWisdomLevel();
    })
    }
}

//Temper Level Comparison

const checkTemper = document.querySelectorAll(".temper");

const checkTemperLevel = () => {
    if(currentPlayer === 1) {
        checkTemper[0].addEventListener("click", () => {
        compareTemperLevel();
        p2Card();
        })
    } else {
        checkTemper[1].addEventListener("click", () => {
        compareTemperLevel();
        p1Card()
        })
    }
}
 */
//it doesn't change the card after the result
//also only magic button works but it give error as well




///// JS TIPS /////

// changing the src of an Img property => charImg1.src = "../topTrumps/img/argusFilch.jpg"

/* extras 
    //add a class to close the card so whose turn cannot see the other card
        therefore the game could be more enjoyable if you won't see the other card values

*/