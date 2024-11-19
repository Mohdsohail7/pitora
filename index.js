const express = require("express");
const cors = require("cors");
require("dotenv").config();

// const { searchImages } = require("./controllers/searchImages");

const app = express();

const userRoute = require("./routes/user");
const getUserroute = require("./routes/user");
const userRouteById = require("./routes/user");
const searchImagesRoute = require("./routes/searchImages");
const photosRoute = require("./routes/photoSaveInCollection");
const getPhotosRoute = require("./routes/photoSaveInCollection");

// middleware
app.use(cors());
app.use(express.json());

// routes 
app.use("/api", userRoute);
app.use("/api", photosRoute);
app.use("/api", searchImagesRoute);
app.use("/api", getUserroute);
app.use("/api", userRouteById);
app.use("/api", getPhotosRoute);

// defualt route 
app.get("/", (req, res) => {
    res.send("Welcome To Pitora");
});

const PORT = process.env.PORT || 8000;
//  server listen
app.listen(PORT, () => {
    console.log("Server is running at port number: ", PORT);
});