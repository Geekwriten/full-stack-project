const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const MangadataSchema = mongoose.Schema ({
    Title: {
      type: String
    },
    Author: {
      type: String,
      required: true
    },
    Numbervol: {
      type: Number,
      required: true
    },
    Totvol: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  });
  const Manga = module.exports = mongoose.model('Manga', MangadataSchema);


module.exports.addmanga = function(newMangadata, callback) {
  newMangadata.save(callback);
  }