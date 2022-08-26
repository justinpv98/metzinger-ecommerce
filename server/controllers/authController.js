const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const asyncHandler = require("express-async-handler");

const UserModel = require("../models/UserModel");

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if(!email || !password || !firstName || !lastName){
    res.status(400);
    throw new Error("A field is missing.")
  }

  const user = await UserModel.findByEmail(email);

  //if there is already a user with that email, then the emal is unavailable

  const rowLength = user.rows.length;


  if (rowLength > 0) {
    res.status(401);
    throw new Error("Email is unavailable.");
  }

  //generate salt, then hash the password including salt randomness
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hash = await bcrypt.hash(password, salt);

  const newUser = await UserModel.create(email, hash, firstName, lastName);
  const id = newUser.rows[0].id


  if (newUser) {
    const token = jwtGenerator(id);
    res.status(201).json({
        id,
        email,
        firstName,
        lastName,
        token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Log in a user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findByEmail(email);

  // if there are no users with that email then the user is notified that there's an error.
  if (user.rows.length === 0) {
    res.status(401);
    throw new Error("Incorrect email or password.");
  } else if (user && (await bcrypt.compare(password, user.rows[0].password))) {
    const {id, first_name: firstName, last_name: lastName} = user.rows[0]
    const token = jwtGenerator(id);

    res.json({
        id,
        email,
        firstName,
        lastName,
        token,
    });
  } else {
    res.status(401);
    throw new Error("Incorrect email or password.");
  }
});

// @desc    Update user info
// @route   PUT /api/auth/update
// @access  Public
const update = asyncHandler(async (req, res) => {
  const { id, firstName, lastName} = req.body;
  let password;

  const user = await UserModel.findById(id);

  if (user.rows.length === 0) {
    res.status(401);
    throw new Error("User does not exist.");
  } 


  if(req.body.password){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
  
    const hash = await bcrypt.hash(req.body.password, salt);

    password = hash
  } else {
    password = user.rows[0].password
  }

  const modifiedUser = await UserModel.update(id, firstName, lastName, password)


  if(!modifiedUser.rows.length === 0){
    res.status(400);
    throw new Error("User could not be updated.")
  }

  res.status(200).json({
    firstName: modifiedUser.rows[0].first_name,
    lastName: modifiedUser.rows[0].last_name,
  })

  
});

const isVerified = asyncHandler(async (req, res) => {
  try {
    //if the jwt passes the authorization middlewhere, then it means the user is verified
    res.json(true);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error.");
  }
});

module.exports = {
  register,
  login,
  isVerified,
  update
};
