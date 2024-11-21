const { searchImages } = require("../../controllers/searchImages");

jest.mock("../../controllers/searchImages", () => ({
    ...jest.requireActual("../../controllers/searchImages"),
    searchImages: jest.fn(),
}));

describe("controller searchImages test",() => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("searchImages function should return image", async () => {
        const mockData = {
            imageUrl: "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d",
            description: "Under",
            altDescription: "underwater photography of water bubbles"
        };
        searchImages.mockResolvedValue(mockData);

        const response = await searchImages(mockData);

        expect(searchImages).toHaveBeenCalledWith(mockData);
        expect(response).toEqual(mockData);
    });
});