const UserModel = require('../models/authModel');
const BlogModel = require('../models/crudModel');

const LoginPage = (req, res) => {
    return res.render('loginpage');
};

const RegisterPage = (req, res) => {
    return res.render('register');
};

const DashboardPage = (req, res) => {
   return res.render('dashbord');
};



module.exports = {
    LoginPage,
    RegisterPage,
    DashboardPage,
 
};
