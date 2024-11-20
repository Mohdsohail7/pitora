const { searchHistory } = require("../models/searchHistory");


const searchHistoryBasedOnUserId = async (req, res) => {
    try {
        const { userId } = req.query;
        console.log("userId-->", userId);
        if (!userId) {
            return res.status(400).json({ error: "User id is missing"});
        }
        const searchPastHistory = await searchHistory.findAll({ where: {userId}, order: [["timestamp", "DESC"]]});
        if (searchPastHistory.length === 0) {
            return res.status(404).json({ error: "No past search history found for this user."});
        }

        return res.status(200).json({ searchHistory: searchPastHistory });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server error.", error: error.message });
    }
}
module.exports = searchHistoryBasedOnUserId;