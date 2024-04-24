// UpdateProfile.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/updateprofile", async (req, res) => {
  try {
    const filter = { _id: req.body.userId }; // Assuming you pass the userId in the request body

    const update = {
      name: req.body.name,
      email: req.body.email,
    };

    // await User.findOne({ country: 'Croatia' }).exec();

    const updatedUserDoc = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    // console.log(updatedUserDoc);
    console.log(req.body.userId);

    res.json({ success: true, user: updatedUserDoc });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;
