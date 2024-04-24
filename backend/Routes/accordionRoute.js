//accordionRoute.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Place = require("../models/Place");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads2");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/accordionroute", async (req, res) => {
  try {
    res.send([global.placed_data]);
  } catch (e) {
    console.log(e);
    res.send("server error");
  }
});

router.post(
  "/accordionsubmitroute",
  upload.single("cleanImg"),
  async (req, res) => {
    try {
      const filePath = req.file.path;
      const fileName = path.basename(filePath);
      const filter = { _id: req.body._id };

      const update = {
        cleanerId: req.body.cleanerId,
        cleanImg: fileName,
      };

      const updatedPlaceDoc = await Place.findOneAndUpdate(filter, update, {
        new: true,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
);

module.exports = router;
