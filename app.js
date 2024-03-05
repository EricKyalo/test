const express = require("express");
const ejs = require("express-ejs-layouts");
const path = require("path");


// activating express
const app = express();

// activating mongoose
const connectDB = require("./server/database/database.js");
const { route } = require("./server/routes/index");
connectDB();

// requiring .env file
require("dotenv").config()//mongo connection

// body-parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// setting up ejs & Layouts
app.use(ejs)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join(__dirname, "views/layouts/main"));

// setting up static files (imgs, css, js)
app.use(express.static(path.join(__dirname, "public")))

// routes middleware
// index router home page
app.use("/", require("./server/routes/index"));

const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});