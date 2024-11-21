const { searchPhotosByTagsAndSortingByDate } = require("../../controllers/searchPhotosByTagsAndSortingByDate");

jest.mock("../../controllers/searchPhotosByTagsAndSortingByDate", () => ({
    ...jest.requireActual("../../controllers/searchPhotosByTagsAndSortingByDate"),
    searchPhotosByTagsAndSortingByDate: jest.fn(),
}));

describe("controller searchPhotosByTagsAndSortingByDate function test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("searchPhotosByTagsAndSortingByDate function should return photo by tags and sorting", async () => {
        const photoByTag = {
            imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            dateSaved: "2024-11-20T06:47:57.182Z",
            tags: ["advanture"]
        };
        searchPhotosByTagsAndSortingByDate.mockResolvedValue(photoByTag);

        const result = await searchPhotosByTagsAndSortingByDate(photoByTag);

        expect(searchPhotosByTagsAndSortingByDate).toHaveBeenCalledWith(photoByTag);
        expect(result).toEqual(photoByTag);
    });
});