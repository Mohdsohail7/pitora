

const validateQuery = (query) => {
    if (!query || query.trim() === "") {
        return { message: "search term is required." };
    }
    return null;
}
module.exports = { validateQuery };