'use strict';


function Movie(){
}

Object.defineProperty(Movie, 'collection', {
  get: function(){return global.mongodb.collection('movies');}
});

Movie.create = function(title, cb){
  Movie.collection.save(title, cb);
};

Movie.remove = function(title, cb){
  Movie.collection.findOne({title:title}, function(err, title){
    Movie.collection.remove({_id:title._id}, function(err, response){
      cb();
    });
  });
};

module.exports = Movie;

