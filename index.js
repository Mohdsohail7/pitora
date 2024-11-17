const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const userRoute = require("./routes/user");

// middleware
app.use(cors());
app.use(express.json());

// routes 
app.use("/api", userRoute);

// defualt route 
app.get("/", (req, res) => {
    res.send("Welcome To Pitora");
});

const PORT = process.env.PORT || 8000;
//  server listen
app.listen(PORT, () => {
    console.log("Server is running at port number: ", PORT);
});