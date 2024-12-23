const http = require('http');
const port = 8000;
const fs = require('fs');
const server = http.createServer((req,res)=>{

    let fileName="";
    switch(req.url){
        case "/":
            fileName = "./home.html";
        break;
        case "/about":
            fileName = "./about.html";
        break;
        case "/contact":
            fileName = "./contact.html";
        break;
        case "/blog":
            fileName = "./blog.html";
        break;
        case "/shop":
            fileName = "./shop.html";
        break;
    }

    fs.readFile(fileName,(err,pagename)=>{
        if(err){
            console.log('file is not found');
            return false;
        }
        res.end(pagename);
    })

})

  server.listen(port,(err)=>{
        if(!err){

            console.log(`thise server is run:-${port}`);
            
        }
    })

