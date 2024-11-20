const express = require("express");
const searchHistoryBasedOnUserId = require("../controllers/searchHistoryBasedOnUserId");
const router = express.Router();

router.get("/search-history", searchHistoryBasedOnUserId);
module.exports = router;
