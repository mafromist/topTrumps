/* async function getCard() {
    const response = await fetch("./database.json");
    const data = await response.json();
    console.log(data);
}

getCard();
 */

/* 
fetch('./database.json')
  .then(response => response.json())
  .then(obj => console.log(obj)) */


const myInit = { method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cachhe: 'default' 
            };

let myRequest = new Request("database.json", myInit);

fetch(myRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.magic)
    })
