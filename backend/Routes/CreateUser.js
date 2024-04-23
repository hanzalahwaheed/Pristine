//CreateUser.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwsSecret = "abhinavnaman1ds21cg001#001$79038";

router.post(
  "/createuser",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password
        password: hash,
        count: 0
      });
      res.json({ success: true });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        //  error: "Server Error"
      });
    }
  }
);

router.post(
  "/loginuser",

  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    console.log("createuser.js-67", email);
    try {
      let userData = await User.findOne({ email });

      console.log("createuser.js-71", userData );

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials" });
      }

      const compPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!compPassword) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials" });
      }


      console.log([global.userName, global.userEmail, global.user_id]);

      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, jwsSecret);

      const jsonData = {
        success: true,
        authToken: authToken,
        name: userData.name,
        email: userData.email,
        _id: userData._id,
      };

     

      return res.json(jsonData);
    } catch (e) {
      console.log(e);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  }
);



module.exports = router;
