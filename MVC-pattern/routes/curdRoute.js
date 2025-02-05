const express = require('express');
const routes = express.Router();

const  multer =require('multer');

const { addpage , viewpage, insertRecord} = require('../controllers/CurdControllers');



routes.get('/',viewpage);
routes.get('/add',addpage);

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cd(null,'uploads')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random()*100000);
        cd(null, `${file.originalname}-${uniq}`)
    }

})

const fileUplode = multer({ storage:st }).single('avatar');
routes.post('/insertrecord',fileUplode, insertRecord);

module.exports=routes;