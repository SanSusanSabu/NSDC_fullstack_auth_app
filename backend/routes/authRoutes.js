const express = require("express");

const router = express.Router();

const userController =  require("../controllers/authController");

//register route

router.post("/register",userController.registerUser)
//login route

router.post("/login",userController.loginUser)

module.exports = router;