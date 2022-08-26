const asyncHandler = require("express-async-handler");

const capitalizeString = require("../utils/capitalizeString");
const ProductModel = require("../models/ProductModel");
const CategoryModel = require("../models/CategoryModel")


// @desc    Get products from a category
// @route   GET /api/category/:category
// @access  Public
const getFromCategory = asyncHandler(async (req, res) => {
  const { category: categoryParam } = req.params;


  const name = capitalizeString(categoryParam)
  const category = await CategoryModel.findByName(name);



  if(category.rows === []){
    res.status(404)
    throw new Error("Category does not exist.")

  } else {
    const {id} = category.rows[0]
  
    const products = await ProductModel.findAllByCategory(id)
  
    return res.json(products.rows);
  }
});

module.exports = {
  getFromCategory,
};
