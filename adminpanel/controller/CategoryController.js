const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');


const addCategoryPage = (req, res) => {
    return res.render('category/add_category')
}
const viewCategoryPage = async (req, res) => {

    try {
        // Get the current page number from the query params (default to 1 if not provided)
        const page = parseInt(req.query.page) || 1;
        const limit = 3; // Number of items per page

        // Calculate the number of categories to skip based on the current page
        const skip = (page - 1) * limit;

        // Fetch categories with pagination
        let categories = await CategoryModel.find({})
            .skip(skip)
            .limit(limit);

        // Get the total number of categories to calculate the total pages
        const totalCategories = await CategoryModel.countDocuments({});
        const totalPages = Math.ceil(totalCategories / limit);

        return res.render('category/view_category', {
            category: categories,
            currentPage: page,
            totalPages: totalPages
        });
    } catch (err) {
        console.log(err);
        return false;
    }

    // try {
    //     let categories = await CategoryModel.find({});
    //     return res.render('category/view_category', {
    //         category: categories
    //     })

    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }
}
const insertCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const add = await CategoryModel.create({
            category: category
        })
        req.flash('success', 'category add successfully')
        return res.redirect('/category/addcategorypage');

    } catch (err) {
        console.log(err);
        return false;

    }
}
const deleteCategegory = async (req, res) => {
    try {
        let id = req.query?.id;
        await CategoryModel.findByIdAndDelete(id);
        await SubcategoryModel.deleteMany({ categoryId: id });
        await ExSubcategoryModel.deleteMany({ categoryId: id });
        req.flash('success', 'category successfully delete')
        return res.redirect('/category');
    } catch (err) {
        console.log(err);
        return false;

    }
}
const editCategory = async (req, res) => {
    try {
        let id = req.query?.id;
        let single = await CategoryModel.findById(id);
        return res.render('category/edit_category', {
            single: single
        })
    } catch (err) {
        console.log(err);
        return false
    }
}
const updateCategory = async (req, res) => {
    try {
        const { editid, category } = req.body;
        await CategoryModel.findByIdAndUpdate(editid, {
            category: category
        })
        req.flash('success', 'category successfully update')
        return res.redirect('/category');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changeStatus = async (req, res) => {
    try {
        const { id, status } = req.query;
        if (status == "deactive") {
            await CategoryModel.findByIdAndUpdate(id, {
                status: status
            })
            // multiple status change by categoryside
            await SubcategoryModel.updateMany({ categoryId: id }, { $set: { status: status } });
            await ExSubcategoryModel.updateMany({ categoryId: id }, { $set: { status: status } });
            req.flash("success", "Category successfully update")
            return res.redirect('/category')
        } else {
            await CategoryModel.findByIdAndUpdate(id, {
                status: status
            })
            // multiple status change by categoryside
            await SubcategoryModel.updateMany({ categoryId: id }, { $set: { status: status } });
            await ExSubcategoryModel.updateMany({ categoryId: id }, { $set: { status: status } });
            req.flash("success", "Category successfully update")
            return res.redirect('/category')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addCategoryPage, viewCategoryPage, insertCategory, changeStatus, deleteCategegory, editCategory, updateCategory
}