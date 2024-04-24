const express = require("express");
const router = express.Router();
const multer = require("multer");
const Place = require("../models/Place");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/reportroute", upload.single("addressImg"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileName = path.basename(filePath);

    await Place.create({
      addressTitle: req.body.addressTitle,
      addressDetails: req.body.addressDetails,
      addressImg: fileName,
      cleanImg: null,
      isActive: true,
      reporterId: req.body.reporterId,
      cleanerId: null,
      isCertificate: false,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
