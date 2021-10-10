const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5000;
const app = express();


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
  
    res.sendStatus(201);
  })

  app.post('/num', (req, res) => {

    //grab mathMethod from request body
    let num = req.body;
    console.log('This is the number input', num);
  
    res.sendStatus(201);
  })