const { createNewUser } = require("../../controllers/createNewUser");

jest.mock("../../controllers/createNewUser", () => ({
    ...jest.requireActual("../../controllers/createNewUser"),
    createNewUser: jest.fn(),
}));

describe("Controllers createNewUser function test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("createNewUser should create a new user", async () => {
        const newUser = { id: 1, username: "sohail", email: "sohail@gmail.com"};
        createNewUser.mockResolvedValue(newUser);

        const newUserCreated = await createNewUser(newUser);

        expect(createNewUser).toHaveBeenCalledWith(newUser);
        expect(newUserCreated).toEqual(newUser);
    });
});
