const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Manga = require("../models/Manga")


// Profile
router.post('/data', (req, res, next) => {
  let newMangadata = new Manga ({
    
      Title:req.body.Title,
      Author: req.body.Author,
      Numbervol:req.body.Numbervol,
      Totvol:req.body.Totvol,
      score:req.body.score,
    });
    Manga.addmanga(newMangadata, (err, Manga) => {
      if(err) {
        res.json({success: false, msg: 'Failed to submit'});
       } else {
        res.json({success: true, msg: 'Submitted'});
      }
    });
  })
  module.exports = router;