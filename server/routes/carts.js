const router = require("express").Router();
const {
  createCart,
  addCartItem,
  getAllCartItems,
  removeCartItem,
  removeAllCartItems,
  updateCartItem,
} = require("../controllers/cartController");

const authorization = require("../middleware/authorization");

router.route("/").post(authorization, createCart);

router
  .route("/:cartId")
  .get(authorization, getAllCartItems)
  .delete(authorization, removeAllCartItems);

router.route("/items").post(authorization, addCartItem);

router
  .route("/items/:cartItemId")
  .put(authorization, updateCartItem)
  .delete(authorization, removeCartItem);

module.exports = router;
