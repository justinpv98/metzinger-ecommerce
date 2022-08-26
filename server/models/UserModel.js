const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (email, password, firstName, lastName) => {
  const query = format(
    `INSERT INTO "user" (email, password, first_name, last_name) 
     VALUES (%L, %L, %L, %L) 
     RETURNING *`,
    email,
    password,
    firstName,
    lastName
  );

  return pool.query(query);
});

const findByEmail = asyncHandler(async (email) => {
  const query = format(`SELECT * 
                        FROM "user" 
                        WHERE email = %L `, email);

  return pool.query(query);
});

const findById = asyncHandler(async (id) => {
  const query = format(`SELECT * 
                        FROM "user" 
                        WHERE id = %L `, id);

  return pool.query(query);
});

const update = asyncHandler(async (id, firstName, lastName, password) => {
  const query = format(
    `UPDATE "user" 
     SET password = %L, first_name = %L, last_name = %L
     WHERE id = %L 
     RETURNING first_name, last_name`,
    password,
    firstName,
    lastName,
    id
  );

  return pool.query(query);
});

module.exports = {
  create,
  findByEmail,
  findById,
  update
};
