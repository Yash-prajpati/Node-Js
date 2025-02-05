const addpage =(req,res)=>{
    return res.render('Crud/add');
}

const viewpage = async (req,res)=>{
    try{

        let allrecord = await UserModel.find({});
        return res.render('Crud/view',{
            record:allrecord
        });

    }catch(err){
        console.log(err);
        return false;
        
    }
}

const insertRecord = async (req,res)=>{
    try{
        const {name,email,password,gender,hobby,city}=req.body;
        await UserModel.create({
            name:name,
            email:email,
            password:password,
            gender:gender,
            hobby:hobby,
            city:city
        })
        console.log("user add");
        return res.redirect('/crud');
        
    }
    catch(err){
        console.log(err);
        return false;
        
    }
}

module.exports={
    addpage,viewpage,insertRecord
}