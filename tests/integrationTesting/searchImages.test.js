const { validateQuery } = require("../../validations/imageValidation");
const request = require("supertest");
const http = require("http");
const { app } = require("../../index");


let Server;

beforeAll((done) => {
    Server = http.createServer(app);
    Server.listen(4040, done);
});

afterAll((done) => {
    Server.close(done);
});

describe("API Endpoint Search images test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("GET /api/search/photos should return search images with valid query", async () => {
        const response = await request(Server).get("/api/search/photos?query=water");

        // console.log("status code-->", response.statusCode);
        // console.log("response-->", response.body);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            "photos": [
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1483004406427-6acb078d1f2d"
                    },
                    "description": "Under",
                    "altDescription": "underwater photography of water bubbles"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwyfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwyfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwyfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwyfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwyfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1519455953755-af066f52f1a6"
                    },
                    "description": "Make a splash.",
                    "altDescription": "selective focus photography of water splash"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwzfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwzfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwzfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwzfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwzfHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1518837695005-2083093ee35b"
                    },
                    "description": "Ocean Ripple",
                    "altDescription": "body of water under sky"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1464925257126-6450e871c667?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw0fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1464925257126-6450e871c667?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw0fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1464925257126-6450e871c667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw0fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1464925257126-6450e871c667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw0fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1464925257126-6450e871c667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw0fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1464925257126-6450e871c667"
                    },
                    "description": null,
                    "altDescription": "photo of underwater"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw1fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw1fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw1fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw1fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw1fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1454123253751-1fe2b9e0c10d"
                    },
                    "description": "Splashing wave from within",
                    "altDescription": "ocean tunnel wave"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw2fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw2fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw2fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw2fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw2fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1495774539583-885e02cca8c2"
                    },
                    "description": null,
                    "altDescription": "water drop on bucket photo"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw3fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw3fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw3fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw3fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw3fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1439405326854-014607f694d7"
                    },
                    "description": null,
                    "altDescription": "body of water during golden hour"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw4fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw4fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw4fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw4fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw4fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1444944232907-0b9e9ace348c"
                    },
                    "description": null,
                    "altDescription": "time lapse photography of sea wave"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1435820394963-a15297f976fd?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw5fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1435820394963-a15297f976fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw5fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1435820394963-a15297f976fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw5fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1435820394963-a15297f976fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw5fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1435820394963-a15297f976fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHw5fHx3YXRlcnxlbnwwfHx8fDE3MzIzMzg5NjR8MA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1435820394963-a15297f976fd"
                    },
                    "description": "Ocean foam",
                    "altDescription": "Seascape of the ocean foam"
                },
                {
                    "imageUrl": {
                        "raw": "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxMHx8d2F0ZXJ8ZW58MHx8fHwxNzMyMzM4OTY0fDA&ixlib=rb-4.0.3",
                        "full": "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxMHx8d2F0ZXJ8ZW58MHx8fHwxNzMyMzM4OTY0fDA&ixlib=rb-4.0.3&q=85",
                        "regular": "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxMHx8d2F0ZXJ8ZW58MHx8fHwxNzMyMzM4OTY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
                        "small": "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxMHx8d2F0ZXJ8ZW58MHx8fHwxNzMyMzM4OTY0fDA&ixlib=rb-4.0.3&q=80&w=400",
                        "thumb": "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzYzMjJ8MHwxfHNlYXJjaHwxMHx8d2F0ZXJ8ZW58MHx8fHwxNzMyMzM4OTY0fDA&ixlib=rb-4.0.3&q=80&w=200",
                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1436968188282-5dc61aae3d81"
                    },
                    "description": "Smooth turquoise water",
                    "altDescription": "clear blue running water at daytime"
                }
            ]
        });
    });

    test("GET /api/search/photos should return error 400 if query is missing", async () => {
        const response = await request(Server).get("/api/search/photos");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: "search term is required."});
    });
    
    test("GET /api/search/photos should return error 404 No images found on given query", async () => {
        const response = await request(Server).get("/api/search/photos?query=whyd");

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual("No images found for the given query.");
    });
    
})