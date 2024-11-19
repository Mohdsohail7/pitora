const express = require("express");
const { createNewUser, getAllUsers, getUserById } = require("../controllers/createNewUser");
const router = express.Router();


router.post("/users", createNewUser);
// get all users
router.get("/all-users", getAllUsers);
// get user by id
router.get("/user/details/:id", getUserById);
module.exports = router;