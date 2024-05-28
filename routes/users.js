const express = require('express');
const { login, register} = require("../controller/UserController");
const zodValidationMiddleware = require("../middleware/zodValidationMiddleware");
const UserSchema = require("../schema/UserSchema");
const router = express.Router();

// Login
router.post("/login", zodValidationMiddleware(UserSchema), login)

// Create user
router.post('/register', zodValidationMiddleware(UserSchema), register);

module.exports = router;
