const express = require("express");
const { addTagsOnPhoto, getAllTags } = require("../controllers/addTagsForPhoto");
const router = express.Router();

// add tag
router.post("/photos/:photoId/tags", addTagsOnPhoto);

// get tags
router.get("/tags", getAllTags);
module.exports = router;