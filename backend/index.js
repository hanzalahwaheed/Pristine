//index.js
const express = require("express");
const cors = require("cors");
const app = express();
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

app.use("", require("./routes/CreateUser"));
app.use("", require("./routes/ReportRoute"));
app.use("", require("./routes/accordionRoute"));
app.use("", require("./routes/UpdateProfile"));
app.use("", require("./routes/CleanImgRet"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
