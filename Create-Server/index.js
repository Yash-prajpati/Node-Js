const http = require('http');
const port = 8001;
const fs = require('fs');
const { log } = require('console');
const server = http.createServer((req,res)=>{

    let filname="";
    switch(req.url){
        case "/":
            filname = '.home.html'
        break;
    }

    fs.readFile(filename,(err,pagename)=>{
        if(err){
            console.log('file is not found');
            return false
        }
        res.end(pagename)
    })

    server.listen(port,(err)=>{
        if(!err){

            console.log('server is start on port :-');
            
        }
    })

})
