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
let player1Score;

//DOM selection from HTML for player and choosen card and an attribute
let p1Score = document.querySelector("#p1Score");
let charImg1 = document.querySelector("#charImg1");
let charName = document.querySelector("#charName");
let p1magicLevel = document.querySelector("#magicLevel");

const p1charName = document.querySelector("#p1charName");
const charImg1 = document.querySelector("#charImg1");
const p1magicLevel = document.querySelector("#p1magicLevel");
const p1Score = document.querySelector("#p1Score");





///// JS TIPS /////

// changing the src of an Img property => charImg1.src = "../topTrumps/img/argusFilch.jpg"



