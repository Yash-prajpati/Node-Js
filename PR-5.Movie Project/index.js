const express = require('express');

const port = 9000;

const app = express();

app.set('view engine','ejs');

const path = require('path');

const db = require('./config/db');

app.use(express.static('public')); 

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use(express.urlencoded());

app.get('/',(req,res) => {
    return res.render('mainPage')
})

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on https://localhost:${port}`);
})