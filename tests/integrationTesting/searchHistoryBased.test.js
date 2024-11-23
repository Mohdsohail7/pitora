const request = require("supertest");
const http = require("http");
const { app } = require("../../index");

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4040, done);
});

afterAll((done) => {
    server.close(done);
});

describe("API Endpoint search history based on user id", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("GET /api/search-history should return history",async () => {
        const response =await request(server).get("/api/search-history?userId=1");
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            "searchHistory": [
                {
                    "id": 7,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-21T17:13:06.049Z",
                    "createdAt": "2024-11-21T17:13:06.051Z",
                    "updatedAt": "2024-11-21T17:13:06.051Z"
                },
                {
                    "id": 6,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-20T18:03:48.097Z",
                    "createdAt": "2024-11-20T18:03:48.097Z",
                    "updatedAt": "2024-11-20T18:03:48.097Z"
                },
                {
                    "id": 5,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-20T18:02:27.715Z",
                    "createdAt": "2024-11-20T18:02:27.721Z",
                    "updatedAt": "2024-11-20T18:02:27.721Z"
                },
                {
                    "id": 4,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-20T17:48:08.412Z",
                    "createdAt": "2024-11-20T17:48:08.417Z",
                    "updatedAt": "2024-11-20T17:48:08.417Z"
                },
                {
                    "id": 3,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-20T17:47:09.924Z",
                    "createdAt": "2024-11-20T17:47:09.926Z",
                    "updatedAt": "2024-11-20T17:47:09.926Z"
                },
                {
                    "id": 2,
                    "query": "advanture",
                    "userId": 1,
                    "timestamp": "2024-11-20T17:43:04.263Z",
                    "createdAt": "2024-11-20T17:43:04.263Z",
                    "updatedAt": "2024-11-20T17:43:04.263Z"
                },
                {
                    "id": 1,
                    "query": "mountain",
                    "userId": 1,
                    "timestamp": "2024-11-20T17:42:15.265Z",
                    "createdAt": "2024-11-20T17:42:15.267Z",
                    "updatedAt": "2024-11-20T17:42:15.267Z"
                }
            ]
        })
    });

    it("GET /api/search-history should return 400 if user id is missing", async() => {
        const response = await request(server).get("/api/search-history?userId");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "User id is missing"})
    });

    it("GET /api/search-history should return 400 if user id is not exist", async() => {
        const response = await request(server).get("/api/search-history?userId=5");

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: "No past search history found for this user."})
    });
})