const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (userId) => {
  const query = format(
    "INSERT INTO wishlist (user_id) VALUES (%L) RETURNING *",
    userId
  );

  return pool.query(query);
});

const findByUserId = asyncHandler(async (userId) => {
  const query = format("SELECT * FROM wishlist WHERE id = %L ", userId);

  return pool.query(query);
});

const deleteWishlist = asyncHandler(async (id) => {
  const query = format("DELETE FROM wishlist WHERE id = %L", id);

  return pool.query(query);
});

module.exports = {
  create,
  deleteWishlist,
  findByUserId,
};
