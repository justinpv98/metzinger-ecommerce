const router = require("express").Router();
const inputValidation = require("../middleware/inputValidation");
const authorization = require("../middleware/authorization")
const {register, login, update} = require('../controllers/authController')


// Register
router.post("/register", inputValidation, register );

//Login
router.post("/login", inputValidation, login);

// Update info
router.put("/update", authorization, update)


module.exports = router;
