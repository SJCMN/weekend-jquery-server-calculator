const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5000;
const app = express();

let num1
let num2

// express
app.listen( PORT , () =>{
    console.log(`server listening on ${PORT}`);
})

// .use() middleware 
app.use(express.static('./server/public'))
app.use(bodyParser.urlencoded({ extended: true }));

// .listen() routes
app.post('/math', (req, res) => {

    //grab mathMethod from request body
    let mathMethod = req.body;
    console.log('This is the calculator method', mathMethod.method);

    if (mathMethod.method === 'equal'){
    console.log('The calculator says', num1.number +' '+ num2.number);
    }
    
    res.sendStatus(201);
  })

  app.post('/firstNumber', (req, res) => {

    //grab mathMethod from request body
    num1 = req.body;
    console.log('This is the firstNumber input', num1);
  
    res.sendStatus(201);
  })

  app.post('/secondNumber', (req, res) => {

    //grab mathMethod from request body
    num2 = req.body;
    console.log('This is the secondNumber input', num2);
  
    res.sendStatus(201);
  })