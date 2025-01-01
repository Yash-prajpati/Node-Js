const express=require('express'); 
const port=8060;
const app =express();

app.set('view engine','ejs');
app.use(express.urlencoded());
let record=[];

app.get('/',(req,res)=>{
    return res.render('Table',{
        record
    });
});

app.get('/form',(req,res)=>{
    return res.render('Form');
});

app.post('/adduser',(req,res)=>{
    const {username,userphone,status}=req.body;
    let obj={
        id : Math.floor(Math.random()*10000),
        name:username,
        phone:userphone,
        status:status
   
    }
    record.push(obj);
    console.log("user sucesfully register");
    return res.redirect('/');
})

app.get('/deletuser',(req,res)=>{
   let id =req.query.deletId
   let deletdata = record.filter(val=>val.id !=id);
   record=deletdata;
   return res.redirect('/');
})

app.get('/edituser',(req,res)=>{
    let id =req.query.editId
    let single = record.find(val=>val.id ==id);
    return res.render('edit',{
        single
    })
})

app.post('/updateuser',(req,res)=>{
    const {editid,username,userphone,status}=req.body;
    let up = record.map((val)=>{
        if(val.id==editid){
            val.name= username;
            val.phone=userphone;
            val.status=status;
        }
        return val;
    })

    record = up;
    return res.redirect('/');

})


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is strat on port http://localhost:${port}`);
})