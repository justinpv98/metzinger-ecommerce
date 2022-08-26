const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (userId) => {
  const query = format(`INSERT INTO cart (user_id)
                        VALUES (%L) 
                        RETURNING *`, userId)

  return pool.query(query);
});

const findByUserId = asyncHandler(async (userId) => {
  const query = format(`SELECT * 
                        FROM cart 
                        WHERE id = %L `, userId)

  return pool.query(query);
});

module.exports = {
  create,
  findByUserId,
};
