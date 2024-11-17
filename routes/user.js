const express = require("express");
const { createNewUser } = require("../controllers/createNewUser");
const router = express.Router();


router.post("/users", createNewUser);
module.exports = router;