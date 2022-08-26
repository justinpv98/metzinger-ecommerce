const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(
  async (userId, card_number, ccv, expiration_date) => {
    const query = format(
      `INSERT INTO user_payment (user_id, card_number, ccv, expiration_date) 
       VALUES (%L, %L, %L, %L) 
       RETURNING *`,
      userId,
      card_number,
      ccv,
      expiration_date
    );

    return pool.query(query);
  }
);

const find = asyncHandler(async (id) => {
  const query = format(`SELECT * 
                        FROM user_payment 
                        WHERE id = %L`, id);

  return pool.query(query);
});

const findByUserId = asyncHandler(async (userId) => {
  const query = format(`SELECT * 
                        FROM user_payment 
                        WHERE user_id = %L`, userId);

  return pool.query(query);
});

const deletePayment = asyncHandler(async (id) => {
  const query = format(`DELETE FROM user_payment
                        WHERE id = %L`, id);

  return pool.query(query);
});

module.exports = {
  create,
  find,
  findByUserId,
  deletePayment,
};
