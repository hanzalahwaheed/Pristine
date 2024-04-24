//accordionRoute.js
const express = require("express");
const router = express.Router();
const Place = require("../models/Place");
const User = require("../models/User");
const bodyParser = require("body-parser");

// Middleware
router.use(bodyParser.json());
router.post("/cleanimgret", async (req, res) => {
  const reporterId = req.body.reporterId;

  try {
    Place.findOne({ reporterId: reporterId })
      .exec()
      .then((user) => {
        if (user) {
          res.json({ success: true, cleanImg: user.cleanImg });
        } else {
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
    res.send("server error");
  }
});

router.post("/setisactive", async (req, res) => {
  try {
    const reporterId = req.body.reporterId;

    const user = await Place.findOne({ reporterId }).exec();
    if (user) {
      const cleanerId = user.cleanerId;
      const updatedPlaceDoc = await Place.findOneAndUpdate(
        { _id: cleanerId },
        { isActive: false },
        { new: true }
      ).exec();

      const cleaner = await User.findOne({ _id: user.cleanerId }).exec();
      if (cleaner) {
        const _id = user.cleanerId;
        const updatedUserDoc = await User.findOneAndUpdate(
          { _id },
          { $inc: { count: 1 } },
          { new: true }
        ).exec();

        res.json({
          success: true,
          cleanerName: cleaner.name,
          cleanerEmail: cleaner.email,
        });
      } else {
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
