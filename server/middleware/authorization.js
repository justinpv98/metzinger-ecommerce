const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env.local" });
const asyncHandler = require("express-async-handler");

const UserModel = require("../models/UserModel");

module.exports = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);


      const payload = UserModel.findById(decodedToken.user.id) 
      req.user = payload.user;

      next()
    } catch (error) {
      console.log(error.message);
      res.status(401);
      throw new Error("Not authorized.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
