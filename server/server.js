const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5000;
const app = express();

let num1
let num2
let operator = ''
let result = 0

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

    // check last operator


    if (mathMethod.method === 'add'){
            operator = 'add'
        } if ( mathMethod.method === 'subtract'){
            operator = 'subtract'
        } if ( mathMethod.method === 'multiply'){
            operator = 'multiply'
        } if (mathMethod.method === 'divide'){
            operator = 'divide'
        } 

    console.log('the operator is: ', operator);

    let first = parseInt(num1.number)
    let second = parseInt(num2.number)
    
    // calculate value
    if (mathMethod.method === 'equal'){
        if (operator === 'add' ){
            result = first + second;
        } if (operator === 'subtract') {
            result = first - second;
        } if (operator === 'multiply') {
            result = first * second;
        } if (operator === 'divide') {
            result = first / second;
        }
    }
    
    console.log('The calculator says', num1.number + ' '+ num2.number, result);

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

app.get('/results', (req,res) =>{

    // display operator
    // multiply x U+02DF
    // division symbol U+00F7
    let operatorSymbol = ''


    if (operator === 'add') {
        operatorSymbol = '+'
    } if (operator === 'subtract') {
        operatorSymbol = '-'
    } if (operator === 'multiply'){
        operatorSymbol = '*'
    } if (operator === 'divide'){
        operatorSymbol = '/'
    }


    let resultValue = {
        equalsResult: result,
        calcLog: num1.number +' '+ operatorSymbol +' '+ num2.number +' = '+ result
    }

    res.send(resultValue)
  })