const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');
const category = require('../models/CategoryModel');

const viewExsubcategorypage = async (req, res) => {
    try {
        let exsubcategory = await ExSubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/ex_view_subcategory', {
            exsubcategory: exsubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addexsubcategorypage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({ status: 'active' });
        let subcategories = await SubcategoryModel.find({ status: 'active' });
        return res.render('exsubcategory/ex_add_subcategory', {
            category: categories,
            subcategory: subcategories
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExsubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        await ExSubcategoryModel.findByIdAndDelete(id);
        req.flash('success', 'Exsubcategory successfully deleted');
        return res.redirect('/exsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
};

const ajaxCategorywiseRecord = async (req, res) => {
    let categoryid = req.query.categoryid;
    try {
        let category = await SubCategoryModel.find({categoryId:categoryid}).populate(categoryid);
        let subcategory = await ExSubcategoryModel.findById({ categoryId: categoryid }).populate('categoryId').populate('subcategoryId');
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            subcategory: subcategory,
            category:category

        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertExsubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory, exsubcategory } = req.body;
        if (editid) {
            await ExSubcategoryModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategory: exsubcategory
            })
            req.flash('success', 'Exsubcategory successfully update');
            return res.redirect('/exsubcategory')
        } else {
            await ExSubcategoryModel.create({
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategory: exsubcategory
            })
            req.flash('success', 'Exsubcategory successfully create');
            return res.redirect('/exsubcategory/addexsubcategorypage')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editExsubcategory = async (req, res) => {
    try {
        let id = req.query?.id
        let category = await CategoryModel.find({ status: 'active' })
        let subcategory = await SubcategoryModel.find({ status: 'active' })
        let single = await ExSubcategoryModel.findById(id).populate('categoryId').populate('subcategoryId');

        return res.render('exsubcategory/ex_edit_subcategory', {
            category: category,
            subcategory: subcategory,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addexsubcategorypage, ajaxCategorywiseRecord, insertExsubcategory, viewExsubcategorypage, editExsubcategory, deleteExsubcategory 
}