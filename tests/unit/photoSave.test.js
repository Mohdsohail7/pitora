const { photoSaveInCollection } = require("../../controllers/photoSaveInCollection");

jest.mock("../../controllers/photoSaveInCollection", () => ({
    ...jest.requireActual("../../controllers/photoSaveInCollection"),
    photoSaveInCollection: jest.fn(),
}));

describe("controller photoSaveInCollection function test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("photoSaveInCollection should saved the photo", async () => {
        const mockPhotaData = {
            imageUrl: "https://images.unsplash.com/photo",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            tags: ['nature', 'mountain'],
            userId: 1
        }
        photoSaveInCollection.mockResolvedValue(mockPhotaData);

        const result = await photoSaveInCollection(mockPhotaData);

        expect(photoSaveInCollection).toHaveBeenCalledWith(mockPhotaData);
        expect(result).toEqual(mockPhotaData);
    });
});