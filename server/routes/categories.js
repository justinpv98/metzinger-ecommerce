const router = require("express").Router();
const { getFromCategory } = require("../controllers/categoryController");

// Get Category
router.get("/:category", getFromCategory);

module.exports = router;
