const express = require('express');
const app = express();
const port = 9000;

const  cors = require('cors');

app.use(cors());

app.get('/users',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"user fetch",
        users:[
            {id:1, name:"jay" , phone:1234},
            {id:2, name:"ajay" , phone:12324},
            {id:3, name:"vjay" , phone:123344},
            {id:4, name:"sanjay" , phone:123124},

        ]
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return flase;
        
    }
    console.log(`server start in thise port :- ${port}`);
    
})