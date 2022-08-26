const asyncHandler = require("express-async-handler");

const ProductModel = require("../models/ProductModel");

// @desc    Gets a product
// @route   POST /api/products/:id"
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id);
  if (product.rows.length === 0) {
    res.status(404);
    throw new Error("Product does not exist.");
  } else {
    return res.status(200).json(product.rows[0]);
  }
});

module.exports = {
  getProduct,
};
