const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

const { connectDB } = require("./config/db");


const PORT = 5000;

app.use(express.json());
app.use(cors());

connectDB();


app.get("/", (req, res) => {
  res.send("hello")
})
app.use("/api/v1", routes)

app.listen(PORT, () => {
  console.log("server running")
})