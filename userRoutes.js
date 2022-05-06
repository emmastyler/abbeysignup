const express = require("express");
const router = express.Router();
const { createUser } = require("./userController");

router.post("/createuser", createUser);

module.exports = router;
