const { pool } = require("../config/database");
const format = require("pg-format");
const asyncHandler = require("express-async-handler");

const create = asyncHandler(async (wishlistId, productId) => {
  const query = format(
    `WITH inserted AS ( INSERT INTO wishlist_item (wishlist_id, product_id) 
                        VALUES (%L, %L) 
                        RETURNING * ) 
     SELECT inserted.*, product.image_url, product.attributes, product.name, product.price 
     FROM inserted 
     JOIN product 
     ON inserted.product_id = product.id `,
    wishlistId,
    productId
  );

  return pool.query(query);
});

const findByWishlistId = asyncHandler(async (wishlistId) => {
  const query = format(
    `SELECT wishlist_item.*, product.image_url, product.attributes, product.name, product.price 
     FROM wishlist_item 
     JOIN product 
     ON wishlist_item.product_id = product.id 
     WHERE wishlist_item.wishlist_id = %L`,
    wishlistId
  );

  return pool.query(query);
});

const findByWishlistIdAndProductId = asyncHandler(async (wishlistId, productId) => {
  const query = format(
    `SELECT * 
     FROM wishlist_item 
     WHERE wishlist_id = %L AND product_id = %L`,
    wishlistId,
    productId
  );

  return pool.query(query);
});

const deleteItem = asyncHandler(async (productId) => {
  const query = format(`DELETE FROM wishlist_item 
                        WHERE product_id = %L`, productId);

  return pool.query(query);
});

const deleteAllItems = asyncHandler(async (id) => {
  const query = format(`DELETE FROM wishlist_item 
                        WHERE wishlist_id = %L`, id);

  return pool.query(query);
});


module.exports = {
  create,
  deleteItem,
  deleteAllItems,
  findByWishlistId,
  findByWishlistIdAndProductId,
};
