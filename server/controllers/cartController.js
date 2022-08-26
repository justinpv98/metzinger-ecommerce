const asyncHandler = require("express-async-handler");

const CartModel = require("../models/CartModel");
const CartItemModel = require("../models/CartItemModel");


// @desc    Create a new cart or return existing one
// @route   POST /api/carts/
// @access  Private
const createCart = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("UserId is missing");
  }

  const existingCart = await CartModel.findByUserId(userId);

  if (existingCart.rows[0]) {
    const { id, total } = existingCart.rows[0];
    return res.status(200).json({ id, total });
  } 

  const newCart = await CartModel.create(userId);

    if (newCart) {
      const { id, total } = newCart.rows[0];
      res.status(200).json({ id, total });
    } else {
      res.status(400);
      throw new Error("User not found.");
    }
});


// @desc    Add an item to the cart
// @route   POST /api/carts/items
// @access  Private
const addCartItem = asyncHandler(async (req, res) => {
  const { cartId, productId, savedAttributes} = req.body;


  if (!cartId || !productId) {
    res.status(400);
    throw new Error("CartId or ProductId is missing");
  }

  const existingItem = await CartItemModel.findByCartIdAndProductId([cartId, productId, savedAttributes])

  if(existingItem.rows[0]){
    return
  }

  const newCartItem = await CartItemModel.create(cartId, productId, savedAttributes);

  if (newCartItem) {
    const { id, cart_id, product_id, quantity, name, image_url, color, price, attributes } = newCartItem.rows[0]


    res.status(200).json({ id, cart_id, product_id, quantity, name, image_url, color, price, attributes  });
  } else {
    res.status(400);
    throw new Error("Cart item could not be found.");
  }
});


// @desc    Get all items from a cart
// @route   GET /api/carts/:cartId
// @access  Private
const getAllCartItems = asyncHandler(async (req, res) => {
  const { cartId } = req.params;

  const cartItems = await CartItemModel.findByCartId(cartId);

  if (cartItems) {
    const items = cartItems.rows;
    res.status(200).json(items);
  } else {
    res.status(400);
    throw new Error("Cart doesn't exist.");
  }
});


// @desc    Delete an item from a cart
// @route   DELETE /api/carts/items/:id
// @access  Private
const removeCartItem = asyncHandler(async (req, res) => {
  const { cartItemId } = req.params;

  const cartItem = await CartItemModel.deleteItem(cartItemId);

  if (cartItem) {
    res.status(200).json({ id: cartItemId });
  } else {
    res.status(400);
    throw new Error("Cart item could not be found.");
  }
});

// @desc    Delete all items from a cart
// @route   DELETE /api/carts/:cartId
// @access  Private
const removeAllCartItems = asyncHandler(async (req, res) => {
  const { cartId } = req.params;

  const cartItem = await CartItemModel.deleteAllItems(cartId);

  if (cartItem) {
    res.status(200).json([]);
  } else {
    res.status(400);
    throw new Error("Cart item could not be found.");
  }
});


// @desc    Update a cart item
// @route   PUT /api/carts/items/:cartItemId
// @access  Private
const updateCartItem = asyncHandler(async (req, res) => {
  
  const { id, quantity } = req.body;


  const newCartItem = await CartItemModel.update(id, quantity);


  if (newCartItem) {
    const {id, cart_id, product_id, quantity, image_url, color, name, price, attributes} = newCartItem.rows[0];

    res.status(200).json({ id, cart_id, product_id, quantity, image_url, color, name, price, attributes});
  } else {
    res.status(400);
    throw new Error("Cart item could not be found.");
  }
});

module.exports = {
  createCart,
  addCartItem,
  getAllCartItems,
  removeCartItem,
  removeAllCartItems,
  updateCartItem,
};
