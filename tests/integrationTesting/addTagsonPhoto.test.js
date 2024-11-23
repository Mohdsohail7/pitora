const request = require("supertest");
const http = require("http");
const { app } = require("../../index");

const tagsValidation = require("../../validations/tagsValidation");

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4040, done);
});

afterAll((done) => {
    server.close(done);
});

describe("API Endpoint add tags on photo test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("POST /api//photos/:photoId/tags should add tags on photos by given photo id", async () => {
        const response = await request(server).post("/api/photos/1/tags").send({
            "tags": ["testing1"]
          });

          expect(response.statusCode).toBe(201);
          expect(response.body).toEqual({ message: "Tags added successfully" });
    });

    test("POST /api//photos/:photoId/tags should return error 400 if tags not valid", async () => {
        const response = await request(server).post("/api/photos/1/tags").send({
            "tags": [""]
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toEqual({ error: "Tags must be non-empty strings." });
    });

    test("POST /api//photos/:photoId/tags should return error 400 if tags limit exceed", async () => {
        const response = await request(server).post("/api/photos/3/tags").send({
            "tags": ["tag6", "tag7", "tag8", "tag9", "tag10"]
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toEqual({ error: "Cannot add more than 5 tags to a photo." });
    });

    test("POST /api//photos/:photoId/tags should return error 404 if photo is not exist", async () => {
        const response = await request(server).post("/api/photos/40/tags").send({
            "tags": ["tag6", "tag7", "tag8", "tag9", "tag10"]
          });

          expect(response.statusCode).toBe(404);
          expect(response.body).toEqual({ error: "photo not found By this id." });
    });
})