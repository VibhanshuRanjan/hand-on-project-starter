/* eslint-disable no-unused-vars */
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (password.length < 6) {
    return res.json({ status: "error", error: "Password too small" });
  }

  try {
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(200).json(0);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const user_ = await newUser.save();
    res.status(200).json(user_);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(200).json(0);
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(200).json(0);
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
