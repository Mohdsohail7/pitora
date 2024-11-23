const request = require("supertest");
const http = require("http");
const { app } = require("../../index");

const inputTagValidation = require("../../validations/inputTagValidation");
const validateSortMethod = require("../../validations/validateSortMethod");

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4040, done);
});

afterAll((done) => {
    server.close(done);
});

describe("API Endpoint search photo by tags and sorting", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("GET /api/photos/tag/search api should return photo with valid input data", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=advanture&sort=DESC&userId=1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            photos: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
                    description: "Beautiful landscape",
                    altDescription: "Mountain view",
                    dateSaved: "2024-11-20T06:47:57.182Z",
                    tags: [
                        "advanture",
                        "travell"
                    ]
                }
            ]
        });
    });

    it("GET /api/photos/tag/search api should return 400 if user id is missing.", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=advanture&sort=DESC&userId=");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "userId is missing."});
    });

    it("GET /api/photos/tag/search api should return 400 if tag is missing.", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=&sort=DESC&userId=1");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "Tag is missing in query parameter OR cannot be empty."});
    });

    it("GET /api/photos/tag/search api should return 400 if use multiple tag.", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=advanture,newTag1&sort=DESC&userId=1");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "Only a single tag is allowed. Multiple tags are not accepted."});
    });

    it("GET /api/photos/tag/search api should return 400 if tag doesn't exist.", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=Earth&sort=DESC&userId=1");

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: "Photo not found by this tag"});
    });

    it("GET /api/photos/tag/search api should return DESC order if input DESC.", async () => {
        const response = await request(server).get("/api/photos/tag/search?tags=advanture&sort=DESC&userId=1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            photos: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
                    description: "Beautiful landscape",
                    altDescription: "Mountain view",
                    dateSaved: "2024-11-20T06:47:57.182Z",
                    tags: [
                        "advanture",
                        "travell"
                    ]
                }
            ]
        });
    });
})