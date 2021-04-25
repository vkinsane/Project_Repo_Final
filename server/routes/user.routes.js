const express = require("express");
const router = express.Router();

const Users = require("../models/users_model");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");
const fs = require("fs");
const extend = require("lodash/extend");

router.get("/", async (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:userId", (req, res) => {
  Users.findById(req.params.userId)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update/:userId", (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({ error: "Photo could not be uploaded" });
    }
    let user = req.body.profile;
    user = extend(user, fields);
    user.updated = Date.now();
    if (files.photo) {
      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }
    try {
      await user.save();
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: "There was some error in Database" });
    }
  });
});

router.delete("/:userId", (req, res) => {
  Users.findByIdAndDelete(req.params.userId)
    .then(() => res.json("User Account Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/register", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) return res.status(400).json("Email Already Exists!");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const addUser = new Users({
    name: req.body.name,
    email: req.body.email,
    hashed_password: hashPassword,
  });

  addUser
    .save()
    .then(() => res.json("User Registered"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.get("/:userId/photo", (req, res) => {
  if (req.body.profile.photo.data) {
    res.set("Content-Type", req.body.profile.photo.contentType);
    res.send(req.body.profile.photo.data);
  } else {
    res.sendFile(process.cwd() + profileImage);
  }
  res.sendFile(process.cwd() + profileImage);
});

// router.get("/:userId/photo", (req, res) => {
//   if (req.profile.photo.data) {
//     res.set("Content-Type", req.profile.photo.contentType);
//     res.send(req.profile.photo.data);
//   } else {
//     res.sendFile(process.cwd() + profileImage);
//   }
//   res.sendFile(process.cwd() + profileImage);
// });

router.post("/follow", async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.body.userId, {
      $push: { following: req.body.followId },
    });
    try {
      let result = await Users.findByIdAndUpdate(
        req.body.followId,
        { $push: { followers: req.body.userId } },
        { new: true }
      );
      res.json(result);
    } catch (err) {
      res.status(400).json("Error 1: " + err);
    }
  } catch (err) {
    res.status(400).json("Error 2: " + err);
  }
});

router.post("/unfollow", async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.body.userId, {
      $pull: { following: req.body.unfollowId },
    });
    try {
      let result = await Users.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.body.userId },
      });
      res.json(result);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.get("/findpeople/:userId", async (req, res) => {
  let following = req.body.profile.following;
  following.push(req.body.profile._id);
  try {
    let users = await Users.find({ _id: { $nin: following } }).select("name");
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
