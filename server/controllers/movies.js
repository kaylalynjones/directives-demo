'use strict';

var Movie = require('../models/movie');


exports.save = function(req,res){
  Movie.create(req.body, function(err, title){
    if(title) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });
};
