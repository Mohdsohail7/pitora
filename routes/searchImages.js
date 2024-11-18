const express = require("express");
const { searchImages } = require("../controllers/searchImages");
const router = express.Router();

router.get("/search/photos", searchImages);
module.exports = router;