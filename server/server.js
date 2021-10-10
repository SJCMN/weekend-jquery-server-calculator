const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5000;

let app = express();


// express
app.listen( PORT , () =>{
    console.log(`server listening on ${PORT}`);
})

// .use() middleware 
app.use(express.static('./server/public'))
app.use(bodyParser.urlencoded({ extended: true }));

