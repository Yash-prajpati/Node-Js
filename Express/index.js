const express = require('express');
const port=8070;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});

app.listen(port,(err)=>{
    if(!err){
        console.log(`server was run :-${port}`);
        return false;
    }
});