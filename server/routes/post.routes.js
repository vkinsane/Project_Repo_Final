const { Router } = require('express');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');

const Post = require('../models/posts_model');

router.post("/new/:userId", (req,res) => {
    try {
        let post = new Post();
        if(req.body.photo) {
            post.photo.data = fs.readFileSync(req.body.photo.path);
            post.photo.contentType = req.body.photo.type;
            post.text = req.body.text;
        }
        try {
            let result = post.save();
            res.json(result);
        } catch (err) { res.status(400).json("Error: "+err) }
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.get("/photo/:postId", (req,res) => {
    res.set("Content-Type", req.post.photo.contentType)
    res.send(req.post.photo.data);
})

router.get("/by/:userId", (req,res) => {
    try {
        let posts = Post.find({postedBy: req.profile._id})
                              .populate('comments.postedBy', '_id name')
                              .populate('postedBy', '_id name')
                              .sort('-created')
                              .exec()
        res.json(posts)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.get("/feed/:userId", (req,res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    try {
        let posts = Post.find({postedBy: { $in : req.profile.following } })
                            .populate('comments.postedBy', '_id name')
                            .populate('postedBy', '_id name')
                            .sort('-created')
                            .exec()
        res.json(posts)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/like", (req,res) => {
    try {
        let result = Post.findByIdAndUpdate(req.body.postId, {$push: {likes: req.body.userId}}, {new: true})
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/unlike", (req,res) => {
    try {
        let result = Post.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true})
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/comment", (req,res) => {
    let comment = req.body.comment
    comment.postedBy = req.body.userId
    try {
        let result = Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
                                .populate('comments.postedBy', '_id name')
                                .populate('postedBy', '_id name')
                                .exec()
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/uncomment", (req,res) => {
    let comment = req.body.comment
    try {
        let result = Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: comment._id}}}, {new: true})
                            .populate('comments.postedBy', '_id name')
                            .populate('postedBy', '_id name')
                            .exec()
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.delete("/posts/:postId", (req,res) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
    if(!isPoster) res.status('403').json({ error: "User is not authorized" })

    let post = req.post
    try {
        let deletedPost = post.remove()
        res.json(deletedPost)
    } catch (err) { res.status(400).json("Error: "+err) }
})

module.exports = router;