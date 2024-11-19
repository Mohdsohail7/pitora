const express = require("express");
const router = express.Router();
const { photoSaveInCollection, getPhotos } = require("../controllers/photoSaveInCollection");

// route for photo
router.post("/photos", photoSaveInCollection);
// get photos
router.get("/photos", getPhotos);

module.exports = router;