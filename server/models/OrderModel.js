const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (userId, paymentId, shippingId) => {
  const query = format(
    `INSERT INTO "order" (user_id, payment_id, address_id) 
     VALUES (%L, %L, %L) 
     RETURNING *`,
    userId,
    paymentId,
    shippingId
  );

  return pool.query(query);
});

const findAll = asyncHandler(async (userId) => {
  const query = format(
    `SELECT * 
    FROM "order"
    WHERE "order".user_id = %L
    ORDER BY "order".id DESC`,
    userId
  )

  return pool.query(query);
})


module.exports = {
  create,
  findAll,
};