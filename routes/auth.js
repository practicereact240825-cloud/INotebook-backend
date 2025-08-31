import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post(
  "/",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      res.status(201).json(user); // send back the saved user
    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Server Error" , message: error.message});
    }
  }
);

export default router;
