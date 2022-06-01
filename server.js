const express = require("express");
const cors = require("cors");
const routes= require("./routes");
const app = express();
const PORT = 4000;

app.get("/", ( req, res ) => {
    res.json();
});

app.use("/api/v1", routes)



