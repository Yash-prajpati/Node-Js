const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');
const ProductModel = require('../models/ProductModel');
const viewProductpage = async (req, res) => {
    try {
        let products = await ProductModel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId');
        return res.render('product/view_product', {
            products: products
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addProductpage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: 'active' });
        return res.render('product/add_product', {
            category: category
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
//ajax
const ajaxSubcategorywiseRecord = async (req, res) => {
    try {
        let subcateid = req.query.subcateid;
        let subcategory = await ExSubcategoryModel.find({ subcategoryId: subcateid });
        return res.status(200).send({
            success: true,
            message: 'record successfully fetch',
            subcategory
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    viewProductpage, addProductpage, ajaxSubcategorywiseRecord
}

