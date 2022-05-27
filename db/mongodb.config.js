/**
 * @import mongoose to connect Mongodb.
 */

const mongoose$ = require('mongoose');

const _user = process.env.MONGODB_USERNMAE;
const _password = process.env.MONGODB_PASSWORD;
const _db = process.env.MONGODB_NAME

const MONGODB_CONNECTION_STRING = `mongodb+srv://${_user}:${_password}@cluster0.a862v.mongodb.net/${_db}`;

mongoose$.connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
      console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });