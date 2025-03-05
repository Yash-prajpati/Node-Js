const express = require('express');

const routes = express.Router();

const { viewProductpage, addProductpage, ajaxSubcategorywiseRecord } = require('../controller/ProductController');


routes.get('/', viewProductpage)
routes.get('/addproductpage', addProductpage);
routes.get('/ajaxsubcategorywiserecord', ajaxSubcategorywiseRecord)


module.exports = routes;