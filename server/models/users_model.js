const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    about: {
        type: String,
        trim: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
})

module.exports = users_model = mongoose.model('users', userSchema);