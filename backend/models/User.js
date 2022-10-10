const mongoose =require('mongoose');

// import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstnum:  String, // String is shorthand for {type: String}
  secondnum: String,
  result:   String,
});

module.exports =mongoose.model('user', UserSchema)
