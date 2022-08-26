const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const findAllByCategory = asyncHandler(async (categoryId) => {
  const query = format(
    `SELECT id, name, description, quantity, price, image_url, attributes 
     FROM "product" 
     WHERE category_id = %L`,
    categoryId
  );

  return pool.query(query);
});

const findById = asyncHandler(async (productID) => {
  const query = format(
    `SELECT id, name, description, quantity, price, image_url, attributes 
     FROM "product" 
     WHERE id = %L`,
    productID
  );

  return pool.query(query);
});

module.exports = {
  findAllByCategory,
  findById,
};
