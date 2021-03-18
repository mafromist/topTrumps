/* export {createCards}  */

const cardData = [
  {
    name: "Argus Filch",
    imgs: "../topTrumps/img/argusFilch.jpg",
    magic: 0,
    cunning: 17,
    courage: 10,
    wisdom: 40,
    temper: 10,
  },
  {
    name: "Severus Snape",
    imgs: "../topTrumps/img/Severus_Snape.jpg",
    magic: 120,
    cunning: 45,
    courage: 80,
    wisdom: 76,
    temper: 9,
  },
  {
    name: "Draco Malfoy",
    imgs: "../topTrumps/img/Draco_Malfoy.png",
    magic: 60,
    cunning: 35,
    courage: 30,
    wisdom: 28,
    temper: 21,
  },
  {
    name: "Rubeus Hagrid",
    imgs: "../topTrumps/img/Rubeushagrid.png",
    magic: 12,
    cunning: 13,
    courage: 45,
    wisdom: 15,
    temper: 12,
  },
  {
    name: "Luna Lovegood",
    imgs: "../topTrumps/img/Luna_profile.jpg",
    magic: 50,
    cunning: 18,
    courage: 65,
    wisdom: 48,
    temper: 2,
  },
  {
    name: "Nigel",
    imgs: "../topTrumps/img/Nigel.jpg",
    magic: 45,
    cunning: 16,
    courage: 30,
    wisdom: 35,
    temper: 9,
  },
  {
    name: "Lord Voldemort",
    imgs: "../topTrumps/img/VoldemortHeadshot_DHP1.png",
    magic: 120,
    cunning: 42,
    courage: 0,
    wisdom: 60,
    temper: 25,
  },
  {
    name: "Ginny Weasley",
    imgs: "../topTrumps/img/Ginny_Weasley_hbp_promo.jpg",
    magic: 50,
    cunning: 22,
    courage: 65,
    wisdom: 45,
    temper: 11,
  },
  {
    name: "Narcissa Malfoy",
    imgs: "../topTrumps/img/Narcissa_Malfoy.png",
    magic: 65,
    cunning: 28,
    courage: 10,
    wisdom: 29,
    temper: 8,
  },
  {
    name: "James Potter",
    imgs: "../topTrumps/img/JamesPotter.jpg",
    magic: 75,
    cunning: 14,
    courage: 43,
    wisdom: 40,
    temper: 8,
  },
  {
    name: "Alecto Carrow",
    imgs: "../topTrumps/img/Alecto-DH2.jpg",
    magic: 60,
    cunning: 30,
    courage: 20,
    wisdom: 44,
    temper: 18,
  },
  {
    name: "Hermione Granger",
    imgs: "../topTrumps/img/Hermionedhface.jpg",
    magic: 88,
    cunning: 32,
    courage: 70,
    wisdom: 100,
    temper: 5,
  },
  {
    name: "Bellatrix Lestrange",
    imgs: "../topTrumps/img/BellatrixLestrange.png",
    magic: 112,
    cunning: 36,
    courage: 4,
    wisdom: 55,
    temper: 25,
  },
  {
    name: "Griphook",
    imgs: "../topTrumps/img/Griphook.png",
    magic: 40,
    cunning: 30,
    courage: 30,
    wisdom: 40,
    temper: 10,
  },
  {
    name: "Aberforth Dumbledore",
    imgs: "../topTrumps/img/AberforthInfobox.jpg",
    magic: 40,
    cunning: 32,
    courage: 45,
    wisdom: 50,
    temper: 10,
  },
  {
    name: "Feurir Greyback",
    imgs: "../topTrumps/img/Fenrirgreyback.png",
    magic: 65,
    cunning: 30,
    courage: 9,
    wisdom: 40,
    temper: 18,
  },
  {
    name: "Minerva McGonagall",
    imgs: "../topTrumps/img/ProfessorMcGonagall-HBP.jpg",
    magic: 107,
    cunning: 36,
    courage: 45,
    wisdom: 85,
    temper: 20,
  },
  {
    name: "Percy Weasley",
    imgs: "../topTrumps/img/Percy_WeasleyDH.jpg",
    magic: 65,
    cunning: 15,
    courage: 40,
    wisdom: 42,
    temper: 10,
  },
  {
    name: "Cho Chang",
    imgs: "../topTrumps/img/ChoChang.jpg",
    magic: 50,
    cunning: 12,
    courage: 55,
    wisdom: 40,
    temper: 3,
  },
  {
    name: "Neville Longbottom",
    imgs: "../topTrumps/img/NevilleLongbottom.jpg",
    magic: 68,
    cunning: 36,
    courage: 75,
    wisdom: 48,
    temper: 9,
  },
  {
    name: "Mr Ollivander",
    imgs: "../topTrumps/img/GarrickOllivander.png",
    magic: 65,
    cunning: 20,
    courage: 40,
    wisdom: 72,
    temper: 3,
  },
  {
    name: "Ron Weasley",
    imgs: "../topTrumps/img/RonWeasley.jpg",
    magic: 80,
    cunning: 25,
    courage: 70,
    wisdom: 60,
    temper: 10,
  },
  {
    name: "Harry Potter",
    imgs: "../topTrumps/img/Harry_Potter.jpg",
    magic: 95,
    cunning: 40,
    courage: 80,
    wisdom: 100,
    temper: 8,
  },
  {
    name: "Seamus Finnegan",
    imgs: "../topTrumps/img/Seamus_FinniganDH2.jpg",
    magic: 45,
    cunning: 20,
    courage: 50,
    wisdom: 21,
    temper: 3,
  },
  {
    name: "Sybill Trelawney",
    imgs: "../topTrumps/img/SybillTrelawney.jpg",
    magic: 50,
    cunning: 11,
    courage: 40,
    wisdom: 45,
    temper: 3,
  },
  {
    name: "Nagini",
    imgs: "../topTrumps/img/Nagini_PM.png",
    magic: 0,
    cunning: 40,
    courage: 1,
    wisdom: 10,
    temper: 25,
  },
  {
    name: "Gregory Goyle",
    imgs: "../topTrumps/img/Gregory_Goyle.jpg",
    magic: 18,
    cunning: 20,
    courage: 7,
    wisdom: 1,
    temper: 16,
  },
  {
    name: "Amycus Carrow",
    imgs: "../topTrumps/img/Amycus_Carrow.png",
    magic: 59,
    cunning: 31,
    courage: 20,
    wisdom: 44,
    temper: 19,
  },
];

let gameCards = [];
let p1Cards = [];
let p2Cards = [];

const createCards = () => {
  for (let i = 0; i < cardData.length; i++) {
    gameCards[i] = cardData[Math.floor(Math.random() * 28)];
  }
  p1Cards = gameCards.slice(0, 14);
  p2Cards = gameCards.slice(14, 28);
};

createCards();

let currentCard1 = p1Cards[Math.floor(Math.random() * 14)];
let currentCard2 = p2Cards[Math.floor(Math.random() * 14)];

let img1 = currentCard1.imgs;
let img2 = currentCard2.imgs;

let name1 = currentCard1.name;
let name2 = currentCard2.name;

let magicLevel1 = currentCard1["magic"];
let magicLevel2 = currentCard2["magic"];

let cunningLevel1 = currentCard1["cunning"];
let cunningLevel2 = currentCard2["cunning"];

let courageLevel1 = currentCard1["courage"];
let courageLevel2 = currentCard2["courage"];

let wisdomLevel1 = currentCard1["wisdom"];
let wisdomLevel2 = currentCard2["wisdom"];

let temperLevel1 = currentCard1["temper"];
let temperLevel2 = currentCard2["temper"];

const getNextCards = () => {
  currentCard1 = p1Cards[Math.floor(Math.random() * 14)];
  currentCard2 = p2Cards[Math.floor(Math.random() * 14)];
  
  img1 = currentCard1.imgs;
  img2 = currentCard2.imgs;

  name1 = currentCard1.name;
  name2 = currentCard2.name;

  magicLevel1 = currentCard1["magic"];
  magicLevel2 = currentCard2["magic"];

  cunningLevel1 = currentCard1["cunning"];
  cunningLevel2 = currentCard2["cunning"];

  courageLevel1 = currentCard1["courage"];
  courageLevel2 = currentCard2["courage"];

  wisdomLevel1 = currentCard1["wisdom"];
  wisdomLevel2 = currentCard2["wisdom"];

  temperLevel1 = currentCard1["temper"];
  temperLevel2 = currentCard2["temper"];
};



/* let cardNum = Math.floor(Math.random() * (cardData.length));

const randCard = cardData[cardNum];
 */
/* class Card {
  constructor(){
      this.name = cardData[cardNum].name;
      this.img = cardData[cardNum].imgs;
      this.magic = cardData[cardNum].magic;
      this.cunning = cardData[cardNum].cunning;
      this.courage = cardData[cardNum].courage;
      this.wisdom = cardData[cardNum].wisdom;
      this.temper = cardData[cardNum].temper;
  }


} */

/* let randCard1 = new Card() */

/*   console.log(cardData[cardNum]) //how to reach the data 
  console.log(cardData[cardNum].name) */
