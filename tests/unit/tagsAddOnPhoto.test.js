const { addTagsOnPhoto } = require("../../controllers/addTagsForPhoto");

jest.mock("../../controllers/addTagsForPhoto", () => ({
    ...jest.requireActual("../../controllers/addTagsForPhoto"),
    addTagsOnPhoto: jest.fn(),
}));

describe("controller addTagsOnPhoto function test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("addTagsOnPhoto should add tag on photo",async () => {
        const mockNewTags = {
            tags: ["newTag1", "newTag2"]
        };
        addTagsOnPhoto.mockResolvedValue(mockNewTags);

        const result = await addTagsOnPhoto(mockNewTags);

        expect(addTagsOnPhoto).toHaveBeenCalledWith(mockNewTags);
        expect(result).toBe(mockNewTags);
    });
});