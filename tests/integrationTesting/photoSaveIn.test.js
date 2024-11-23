const request = require("supertest");
const http = require("http");
const { app } = require("../../index");

const imageUrlValidation = require("../../validations/imageUrlValidation");
const tagsValidation = require("../../validations/tagsValidation");

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4040, done);
});

afterAll((done) => {
    server.close(done);
});

describe("API Endpoint to photo save in collections", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("POST /api/photos should save a photo in collections", async () => {
        const response = await request(server).post("/api/photos").send({
            imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            tags: ["waterfalling"],
            userId: 1
          });

          expect(response.statusCode).toBe(201);
          expect(response.body).toEqual({ message: "Photo saved successfully."});
    });

    it("POST /api/photos should return error 400 for invalid URL", async () => {
        const response = await request(server).post("/api/photos").send({
            imageUrl: "https://images.unsplash/photo-1480497490787-505ec076689f",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            tags: ["waterView"],
            userId: 1
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toEqual({ message: "Invalid image URL."});
    });

    it("POST /api/photos should return error 400 for empty tags", async () => {
        const response = await request(server).post("/api/photos").send({
            imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            tags: [""],
            userId: 1
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toEqual({ error: "Tags must be non-empty strings."});
    });

    it("POST /api/photos should return error 400 for tags limit exceed", async () => {
        const response = await request(server).post("/api/photos").send({
            imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
            description: "Beautiful landscape",
            altDescription: "Mountain view",
            tags: ["Mountain", "view", "Beautiful", "landscape", "random", "tag"],
            userId: 1
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toEqual({ error: "tags limit exceeds. no more than 5 tags."});
    });

    it("POST /api/photos should return error 404 if data is missing", async () => {
        const response = await request(server).post("/api/photos").send({
            imageUrl: "https://images.unsplash.com/photo-1480497490787-505ec076689f",
            altDescription: "Mountain view",
            tags: ["Mountain", "view", "Beautiful", "landscape", "random", "tag"],
            userId: 1
          });

          expect(response.statusCode).toBe(404);
          expect(response.body).toEqual({ error: "Photo data is missing. Please provide full data."});
    });
})