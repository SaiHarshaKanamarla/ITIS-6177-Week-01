var express = require('express');

var app = express();

const port = process.env.PORT || 3000;

console.log("Hello World");

app.get('',(req,res)=>{
    res.send("<h1>This code runs on the server</h1>");
});

app.listen(port,()=>{
    console.log("The server is running on port "+port);
});