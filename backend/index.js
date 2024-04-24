//index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("", require("./Routes/CreateUser"));
app.use("", require("./Routes/ReportRoute"));
app.use("", require("./Routes/accordionRoute"));
app.use("", require("./Routes/UpdateProfile"));
app.use("", require("./Routes/CleanImgRet"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoDB();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
