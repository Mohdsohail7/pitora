const searchHistoryBasedOnUserId = require("../../controllers/searchHistoryBasedOnUserId");

jest.mock("../../controllers/searchHistoryBasedOnUserId");

describe("controller searchHistoryBasedOnUserId test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("searchHistoryBasedOnUserId function should return search history by user id", async () => {
        const mockData = {
            searchHistory: [{
                id: 7,
                query: "advanture",
                userId: 1,
            }]
        };
        searchHistoryBasedOnUserId.mockResolvedValue(mockData);

        const result = await searchHistoryBasedOnUserId(mockData);

        expect(searchHistoryBasedOnUserId).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });
});