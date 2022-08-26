const router = require("express").Router();
const { getProduct } = require("../controllers/productController");

router.get("/:id", getProduct);

module.exports = router;
