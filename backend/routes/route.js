const express = require("express");
const {userRegistrationForm, getData} = require("../controller/controller");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/register", upload.single("image"), userRegistrationForm);
router.get("/all-data", getData);

module.exports = router;