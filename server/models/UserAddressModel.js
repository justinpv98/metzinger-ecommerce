const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (userId, address, address2 = "", city, state, zipCode) => {
    const query = format(
      `INSERT INTO user_address (user_id, address, address2, city, state, zip_code) 
       VALUES (%L, %L, %L, %L, %L, %L) 
       RETURNING *`,
      userId,
      address,
      address2,
      city,
      state,
      zipCode
    );
  
    return pool.query(query);
  });
  
  const findById = asyncHandler(async (id) => {
    const query = format(`SELECT * 
                          FROM user_address WHERE id = %L`, id);
  
    return pool.query(query);
  });

  const findByUserId = asyncHandler(async (userId) => {
    const query = format(`SELECT * 
                          FROM user_address WHERE user_id = %L`, userId);
  
    return pool.query(query);
  });

  const deleteAddress = asyncHandler(async (id) => {
    const query = format(`DELETE FROM user_address 
                          WHERE id = %L`, id);
  
    return pool.query(query);
  });

  module.exports = {
    create,
    findById,
    findByUserId,
    deleteAddress
  };
  