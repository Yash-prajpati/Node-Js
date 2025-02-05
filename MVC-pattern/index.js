const express = require('express');

const app = express();

const port = 9000;

app.set('view engine','ejs');
const path = require('path');

const db = require('./config/db')

app.use('/',require('./routes/indexRoute'));

app.use(express.urlencoded());

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
        
    }
    console.log(`thise server is run in thise port :- http://localhost:9000`);
    
})