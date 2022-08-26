const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require('express-async-handler')

const findAll = asyncHandler(async () => {
  const query = `SELECT * 
                 FROM category 
                 ORDER BY id ASC `;

  return pool.query(query)
});

const findByName = asyncHandler(async (name) => {
  const query = format(`SELECT id 
                        FROM category 
                        WHERE name = %L`, name);

  return pool.query(query);
});



module.exports = {
  findAll,
  findByName
};
