
const fs = require('fs') 
  
fs.readFile('/Users/anushayalakala/Desktop/test.txt', (err, data) => { 
    if (err) throw err; 
    let processedData = data.toString().replace(/\d/g,'')
    console.log(processedData); 
}) 

developer 2 edited this file