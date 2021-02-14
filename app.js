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

//define players and score
let player1;
let pScore1;

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


let p1Card = () => {
    p1charName.textContent = p1.name;
    charImg1.src = p1.img;
    charImg1.alt = p1.name;
    p1magicLevel.textContent = p1.magic;
    p1cunningLevel.textContent = p1.cunning;
    p1courageLevel.textContent = p1.courage;
    p1wisdomLevel.textContent = p1.wisdom;
    p1temperLevel.textContent = p1.temper;
}

let p2Card = () => {
    p2charName.textContent = p2.name;
    charImg2.src = p2.img;
    charImg2.alt = p2.name;
    p2magicLevel.textContent = p2.magic;
    p2cunningLevel.textContent = p2.cunning;
    p2courageLevel.textContent = p2.courage;
    p2wisdomLevel.textContent = p2.wisdom;
    p2temperLevel.textContent = p2.temper;
}

const gameInit = () => {
    p1Card();
    p2Card();
}

gameInit();

//New Game button

const newGameBtn = document.querySelector("#newGameBtn");

newGameBtn.addEventListener('click', event => {
    window.location.reload();
});






///// JS TIPS /////

// changing the src of an Img property => charImg1.src = "../topTrumps/img/argusFilch.jpg"



