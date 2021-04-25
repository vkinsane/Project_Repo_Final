const { Router } = require('express');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');

const Post = require('../models/posts_model');
const User = require('../models/users_model');

router.post("/new/:userId", (req,res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) res.status(400).json({ error: "Image could not be uploaded" })
        
        let post = new Post(fields)
        post.postedBy = req.params.userId
        if(files.photo){
            post.photo.data = fs.readFileSync(files.photo.path)
            post.photo.contentType = files.photo.type
        }
        
        try {
            let result = await post.save()
            res.json(result)
        } catch (err) {
            res.status(400).json({ error: "There was some Error in Database" })
        }
    })
})

router.get("/photo/:postId", async (req,res) => {
    try{
        let post = await Post.findById(req.params.postId).populate('postedBy', '_id name').exec()
        if (!post) res.status('400').json({ error: "Post not found" })
        res.json({ ...post })
    } catch(err) {
        return res.status('400').json({ error: "Could not retrieve use post" })
    }
})

router.get("/by/:userId", async (req,res) => {
    try {
        let posts = await Post.find({postedBy: req.params.userId})
        res.json(posts)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.get("/feed/:userId", async (req,res) => {
    let following = req.body.profile.following
    following.push(req.body.profile._id)
    try {
        let posts = await Post.find({postedBy: { $in : req.body.profile.following } })
        res.json(posts)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/like", async (req,res) => {
    try {
        let result = await Post.findByIdAndUpdate(req.body.postId, {$push: {likes: req.body.userId}}, {new: true})
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/unlike", async (req,res) => {
    try {
        let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true})
        res.json(result)
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/comment", async (req,res) => {
    try {
        let comment = req.body.comment;
        comment.postedBy = req.body.userId;
        let result = await Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true});
        res.json(result);
    } catch (err) { res.status(400).json("Error: "+err) }
})

router.put("/uncomment", async (req,res) => {
    try {
        let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: req.body.comment._id}}}, {new: true})
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