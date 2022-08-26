const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(
  async (orderId, productId, quantity, attributes) => {
    const query = format(
      `INSERT INTO order_item (order_id, product_id, price, quantity, attributes) 
    SELECT %L, %L, price,  %L, %L 
    FROM product
    WHERE product.id = %L 
    RETURNING *`,
      orderId,
      productId,
      quantity,
      attributes,
      productId
    );

    return pool.query(query);
  }
);

const findAll = asyncHandler(async (orderId) => {
  const query = format(
    `SELECT order_item.id, product.name, product.id as product_id, order_item.price, order_item.quantity, order_item.attributes, product.image_url from order_item 
    LEFT JOIN product 
    ON order_item.product_id = product.id 
    WHERE order_item.order_id = %L 
    ORDER BY order_item.id `,
    orderId
  );

  return pool.query(query);
});

module.exports = {
  create,
  findAll,
};
