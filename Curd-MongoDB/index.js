const express = require('express');
const app = express();
const port=8080;



app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`thise server is running on port:- http://localhost:${port}`);
    
})