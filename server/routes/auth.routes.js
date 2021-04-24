const express = require('express');
const router = express.Router();

const Users = require('../models/users_model');
const Blacklist = require('../models/blacklist_model'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const verify = require('../tokens/loginToken');

router.post('/login', async(req,res) => {
    const user = await Users.findOne({ email: req.body.email });
    if(!user) return res.status(400).json("Account not present");
    
    const auth = await bcrypt.compare(req.body.password, user.password);
    if(!auth) return res.status(400).json("Wrong Password");
    
    const sessionDetails = {
        id: user._id,
        name: user.name
    }
    
    const token = jwt.sign(sessionDetails, process.env.SECRET_KEY, { expiresIn: '30m' });
    res.header("login-token", token).json("Login Successful!");
})

router.post('/logout', async(req, res) => {
    const newToken = new Blacklist({
        token: req.body.token
    })
    newToken.save()
        .then(() => res.json("Logout Successful!"))
        .catch((err) => res.status(400).json("Error: "+err));
})

module.exports = router;