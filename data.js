const fs = require("fs");
const dataBuffer = fs.readFileSync("database1.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson)

console.log(data.length)
let cardNum = Math.floor(Math.random() * (data.length));
console.log(cardNum)
console.log(data[cardNum]) //how to reach the data 
console.log(data[cardNum].name)

