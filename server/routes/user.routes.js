const express = require('express');
const router = express.Router();

const Users = require('../models/users_model');
const bcrypt = require('bcryptjs');

const verify = require('../tokens/loginToken');

router.get('/', verify, async(req,res) => {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("Error: "+err));
})

router.get("/:userId", (req, res) => {
    Users.findById(req.params.userId)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/:userId", (req,res) => {
    Users.findOneAndUpdate(req.params.userId, req.profile, {upsert: true})
        .then(() => res.json("Succesfully saved"))
        .catch((err) => res.status(400).json("Error: " + err));
})

router.delete("/:userId", (req, res) => {
    Users.findByIdAndDelete(req.params.userId)
      .then(() => res.json("User Account Deleted"))
      .catch((err) => res.status(400).json("Error: " + err));
});
  
router.post('/register', async(req,res) => {
    const user = await Users.findOne({ email: req.body.email });
    if(user) return res.status(400).json("Email Already Exists!");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const addUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });

    addUser.save()
        .then(() => res.json('User Registered'))
        .catch((err) => res.status(400).json('Error'+ err));
})

router.get("/:userId/photo", (req,res) => {
    if (req.profile.photo.data) {
        res.set("Content-Type", req.profile.photo.contentType)
        res.send(req.profile.photo.data);
    } else {
        res.sendFile(process.cwd()+profileImage);
    }
    res.sendFile(process.cwd()+profileImage);
});

router.get("/defaultphoto", (req,res) => {
    res.sendFile(process.cwd()+profileImage);
})

router.put("/follow", (req,res) => {
    try {
        User.findByIdAndUpdate(req.body.userId, {$push: {following: req.body.followId}});
        try {
            let result = User.findByIdAndUpdate(req.body.followId, {$push: {followers: req.body.userId}}, {new: true})
                                    .populate('following', '_id name')
                                    .populate('followers', '_id name')
                                    .exec();
            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result);
        } catch(err) {
            res.status(400).json({ error: errorHandler.getErrorMessage(err) })
        }
    } catch(err) {
        res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
})

router.put("/unfollow", (req,res) => {
    try {
        User.findByIdAndUpdate(req.body.userId, {$pull: {following: req.body.unfollowId}}) 
        try {
            let result = User.findByIdAndUpdate(req.body.unfollowId, {$pull: {followers: req.body.userId}}, {new: true})
                                    .populate('following', '_id name')
                                    .populate('followers', '_id name')
                                    .exec() 
            result.hashed_password = undefined
            result.salt = undefined
            res.json(result)
        } catch(err) {
            return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
        }
    } catch(err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
})

router.get("/findpeople/:userId", (req,res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    try {
        let users = User.find({ _id: { $nin : following } }).select('name')
        res.json(users)
    }catch(err){
        res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
})

module.exports = router;