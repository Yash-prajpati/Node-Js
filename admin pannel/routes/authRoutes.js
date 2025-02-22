const express = require('express');
const multer = require('multer');


const {LoginPage,RegisterPage,DashboardPage} = require('../controllers/authcontroller');
const {LoginPage,RegisterPage,DashboardPage  } = require('../controllers/indexcontroller');

const routes = express.Router();

routes.get('/', LoginPage);
routes.get('/register', RegisterPage);
routes.get('/dashboard', DashboardPage);


module.exports = routes;
