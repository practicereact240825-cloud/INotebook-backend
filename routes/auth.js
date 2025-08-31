import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const user = new User(req.body);
    await user.save();

    res.status(201).json(user); // send back the saved user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
