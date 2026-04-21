const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/auth/register', [
     body("email").isEmail().withMessage("Invalid email or password"),
       body("fullName").notEmpty().trim(),
       body("password")
         .isLength({ min: 6 })
         .withMessage("Password must be at least 6 charcters long")

], userController.registerUser);

router.post(
  "/auth/login",
  [
    body("email").isEmail().withMessage("Invalid email or password"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 charcters long"),
  ],
  userController.loginUser
);

module.exports = router;