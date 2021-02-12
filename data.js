const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('data.csv')
    .pipe(csv(
        ['Name', 'Magic', 'Cunning', 'Courage', 'Wisdom', 'Temper']
    ))
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results[2]['Name']);
})



/* d3.csv("/data.csv", function(h) {
    return {
      name : h.individual,
      magic: +h.magic,
      cunning : +h.cunning,
      courage : +h.courage,
      wisdom : +h.courage,
      temper : +h.temper
    };
  }).then(function(data) {
    console.log(data[0]);
  }); 
  
  
  */
