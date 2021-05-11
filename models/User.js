const mongoose = require('mongoose');
const _ = require('lodash');

const UserSchemna = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 4,
      max: 8,
    },
    lastname: {
      type: String,
      required: true,
      min: 4,
      max: 8,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    title: {
      type: String,
      required: false,
    },

    Date: {
      type: Date,
      default: Date.now,
    },
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
   
);

module.exports = mongoose.model('User', UserSchemna);
