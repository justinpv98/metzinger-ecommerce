const asyncHandler = require("express-async-handler");

const wishlistModel = require("../models/WishlistModel");
const wishlistItemModel = require("../models/WishlistItemModel");


// @desc    Creates a wishlist or returns an existing one
// @route   POST /api/wishlists/:userId"
// @access  Private
const createWishlist = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("userId is missing");
  }

  const existingWishlist = await wishlistModel.findByUserId(userId);

  if (existingWishlist.rows[0]) {
    const data = existingWishlist.rows[0];
    return res.status(200).json(data);
  }

  const newWishlist = await wishlistModel.create(userId);


  if (newWishlist) {
    const data = newWishlist.rows[0];
    return res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("User not found.");
  }
});

// @desc    Adds a wishlist item to cart
// @route   POST /api/wishlists/items
// @access  Private
const addWishlistItem = asyncHandler(async (req, res) => {
  const { wishlistId, productId,} = req.body;

  if (!wishlistId || !productId) {
    res.status(400);
    throw new Error("WishlistId or ProductId is missing");
  }

  const existingItem = await wishlistItemModel.findByWishlistIdAndProductId(
    wishlistId,
    productId
  );

  if (existingItem.rows[0]) {
    return;
  }

  const newWishlistItem = await wishlistItemModel.create(wishlistId, productId);

  if (newWishlistItem) {
    const { id, wishlist_id, product_id, name, image_url, color, price } =
      newWishlistItem.rows[0];
    res
      .status(200)
      .json({ id, wishlist_id, product_id, name, image_url, color, price });
  } else {
    res.status(400);
    throw new Error("Wishlist item could not be found.");
  }
});


// @desc    Gets all items from a wishlist
// @route   GET /api/wishlists/:wishlistId
// @access  Private
const getAllWishlistItems = asyncHandler(async (req, res) => {
  const { wishlistId } = req.params;

  const wishlistItems = await wishlistItemModel.findByWishlistId(wishlistId);


  if (wishlistItems.rows) {
    const items = wishlistItems.rows;
    res.status(200).json(items);
  } else {
    res.status(400);
    throw new Error("Wishlist doesn't exist.");
  }
});


// @desc    Removes a wishlist item
// @route   DELETE /api/wishlists/items/:wishlistItemId
// @access  Private
const removeWishlistItem = asyncHandler(async (req, res) => {
  const { wishlistItemId } = req.params;

  const wishlistItem = await wishlistItemModel.deleteItem(wishlistItemId);

  if (wishlistItem) {
    res.status(200).json({ id: wishlistItemId });
  } else {
    res.status(400);
    throw new Error("Wishlist item could not be found.");
  }
});

module.exports = {
  addWishlistItem,
  createWishlist,
  getAllWishlistItems,
  removeWishlistItem,
};
