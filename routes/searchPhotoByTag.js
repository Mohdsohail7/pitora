const express = require("express");
const searchPhotosByTagsAndSortingByDate = require("../controllers/searchPhotosByTagsAndSortingByDate");
const router = express.Router();

router.get("/photos/tag/search", searchPhotosByTagsAndSortingByDate);
module.exports = router;