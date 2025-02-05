const express = require('express');
const routes = express.Router();


routes.get('/',(req,res)=>{
    console.log("file is run");
    return res.render('view')
})

routes.use('/crud',require('./curdRoute'));


module.exports=routes;