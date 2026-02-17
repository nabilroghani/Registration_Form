const express = require("express");
const userRegistrationForm = require("../controller/controller");
const router = express.Router();

router.post("/register", userRegistrationForm);

module.exports = router;