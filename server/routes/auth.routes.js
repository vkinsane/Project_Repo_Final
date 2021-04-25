const express = require("express");
const router = express.Router();

const Users = require("../models/users_model");
const Blacklist = require("../models/blacklist_model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Account not present");

    const auth = await bcrypt.compare(req.body.password, user.hashed_password);
    if (!auth) return res.status(400).json("Wrong Password");

    const sessionDetails = {
      id: user._id,
      name: user.name,
    };

    const token = jwt.sign(sessionDetails, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });
    res.header("login-token", token).send({ message: "aa", id: user._id });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/logout", async (req, res) => {
  const newToken = new Blacklist({
    token: req.body.token,
  });
  newToken
    .save()
    .then(() => res.json("Logout Successful!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
