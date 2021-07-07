const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    console.log("I am here in get rquest");
    res.send("HAPPY TO SEE YOU ALL");
})

app.listen(port,()=> console.log("Listening on port "+port));