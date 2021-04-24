const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const conn = mongoose.connection;

conn.once('open', () => {
  console.log('MongoDB connection established');
})

app.get('/', (req,res) => {
  res.send("Welcome to your First Mern Backend");
})

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

const userRouter = require('./routes/user.routes');
app.use('/user', userRouter);

const postRouter = require('./routes/post.routes');
app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})