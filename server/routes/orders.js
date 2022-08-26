const router = require("express").Router();
const {
  createOrder,
  getOrders,
} = require("../controllers/orderController");

const authorization = require("../middleware/authorization");

//fix this get orders should point to an id?
router
  .route("/")
  .post(authorization, createOrder);

router.route("/:userId").get(authorization, getOrders);


module.exports = router;
