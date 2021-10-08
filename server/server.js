const express = require('express');

let app = express();

const PORT = 5000;

app.listen( PORT , () =>{
    console.log(`server listening on ${PORT}`);
    
})