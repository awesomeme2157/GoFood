const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Route to create a new user with validation
router.post(
  "/createuser",
  [
    // Validation checks
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body("password", "Password must be at least 6 characters long").isLength({
      min: 6,
    }),
    body("location", "Location is required").not().isEmpty(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, location, email, password } = req.body;

    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      user = new User({
        name,
        location,
        email,
        password: hashedPassword, // Save the hashed password
      });

      await user.save();
      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

// Route to login a user with validation
router.post(
  "/loginuser",
  [
    // Validation checks
    body("email", "Please include a valid email").isEmail(),
    body("password", "Password must be at least 6 characters long").isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "Invalid credentials" }],
        });
      }

      // Compare passwords using bcrypt
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "Invalid credentials" }],
        });
      }

      // Create a JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (error, token) => {
          if (error) {
            console.error(error.message);
            return res.status(500).json({ errors: [{ msg: "Token Error" }] });
          }
          res.status(200).json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

module.exports = router;
