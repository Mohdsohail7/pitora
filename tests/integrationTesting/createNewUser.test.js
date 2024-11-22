const { validateUserData } = require("../../validations/validateUserData");
const { doesUserExist } = require("../../validations/doesUserExist");
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

describe("API Endpoint to create new user", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("POST /api/users should create a new user with valid input", async () => {
        const response = await request(server).post("/api/users").send({
            username: "sohail",
            email: "sohail0101@example.com",
        });
    
        console.log("Response status:", response.statusCode);
        console.log("Response body:", response.body);
    
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("User created successfully");
        expect(response.body.user.username).toBe("sohail");
        expect(response.body.user.email).toBe("sohail0101@example.com");

        expect(response.body.user.id).toBeDefined();
        expect(response.body.user.createdAt).toBeDefined();
        expect(response.body.user.updatedAt).toBeDefined();
    });

    it("POST /api/users should return 400 email exist", async () => {
        const response = await request(server).post("/api/users").send({
            username: "sohail",
            email: "sohail12@example.com",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "User already exists with this email. Please try to new email." });
    });
    

    it("POST /api/users should return 400 invalid user data", async () => {
        const response = await request(server).post("/api/users").send({
            username: "sohail",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "Username or Email are required" });
    });

    it("POST /api/users should return 400 invalid email format", async () => {
        const response = await request(server).post("/api/users").send({
            username: "sohail",
            email: "sohailgmail.com",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            error: "Invalid Email format. Please check @ or . added in your email",
        });
    });
});
