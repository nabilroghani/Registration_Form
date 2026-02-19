const express = require("express");
const userRegistrationForm = require("../controller/controller");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/register", upload.single("image"), userRegistrationForm);

module.exports = router;