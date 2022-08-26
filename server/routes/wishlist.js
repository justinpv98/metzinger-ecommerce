const router = require("express").Router();
const {
  createWishlist,
  addWishlistItem,
  getAllWishlistItems,
  removeWishlistItem,
} = require("../controllers/wishlistController");

const authorization = require("../middleware/authorization");

router.route("/").post(authorization, createWishlist);

router.get("/:wishlistId", authorization, getAllWishlistItems);

router.route("/items").post(authorization, addWishlistItem);

router.delete("/items/:wishlistItemId", authorization, removeWishlistItem);

module.exports = router;
