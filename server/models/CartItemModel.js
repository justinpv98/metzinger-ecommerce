const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (cartId, productId, attributes) => {
  const query = format(
    `WITH inserted AS ( INSERT INTO cart_item (cart_id, product_id, attributes) 
     VALUES (%L, %L, %L) 
     RETURNING * ) 
     SELECT inserted.*, product.image_url, product.name, product.price 
     FROM inserted 
     JOIN product 
     ON inserted.product_id = product.id `,
    cartId,
    productId,
    attributes
  );

  return pool.query(query);
});

const findByCartId = asyncHandler(async (cartId) => {
  const query = format(
    `SELECT cart_item.*, product.image_url, product.name, product.price, category.name AS category_name 
     FROM cart_item 
     JOIN product 
     ON cart_item.product_id = product.id 
     JOIN category 
     ON product.category_id = category.id 
     WHERE cart_item.cart_id = %L`,
    cartId
  );

  return pool.query(query);
});


const findByCartIdAndProductId = asyncHandler(async ([cartId, productId, attributes ]) => {
  const query = format(
    `SELECT * 
     FROM cart_item 
     WHERE cart_id = %L AND product_id = %L AND attributes = %L`,
    cartId,
    productId,
    attributes
  );

  return pool.query(query);
});

const deleteItem = asyncHandler(async (id) => {
  const query = format(`DELETE FROM cart_item 
                        WHERE id = %L`, id);

  return pool.query(query);
});

const deleteAllItems = asyncHandler(async (cartId) => {
  const query = format(`DELETE FROM cart_item 
                        WHERE cart_id = %L`, cartId);

  return pool.query(query);
});

const update = asyncHandler(async (id, newValue) => {
  const query = format(
    `WITH updated AS (UPDATE cart_item 
                      SET quantity = %L 
                      WHERE id = %L 
                      RETURNING *) 
     SELECT updated.*, product.image_url, product.name, product.price 
     FROM updated 
     JOIN product 
     ON updated.product_id = product.id `,
    newValue,
    id
  );


  return pool.query(query);
});

module.exports = {
  create,
  deleteItem,
  deleteAllItems,
  findByCartId,
  findByCartIdAndProductId,
  update,
};
