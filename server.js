var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
var Joke = require('./models/jokes');

mongoose.connect('mongodb://localhost/chucknorrisjokes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname+'/index.html'));

var port = process.env.PORT || 8080;

// ===CREATE ROUTES===
var router = express.Router();

// ===MIDDLEWARE===
// Middleware to use for ALL requests
router.use(function(req, res, next){
  console.log('Something is happening');
  next(); //go to next route, don't stop here
});

// ===DEFINE ROUTES===
// Test route to make sure everything is working (accessed at GET http://localhost:8080/api/{{whatever here}} <== line 19 defines the "api" part of the URL)
router.get('/', function(req, res){
  res.json({message: 'hooray! welcome to our api'});
});


// On /jokes URL
router.route('/jokes')

  // POST: create a joke (accessed at POST http://localhost:8080/api/jokes)
  .post(function(req, res){

    var joke = new Joke(); // Create new instance of Joke Model
    joke.line = req.body.line; // Set the joke question
  
    // save the joke and check for errors
    joke.save(function(err){
      if (err){
        res.send(err);
      }

      res.json({message: 'Joke Created'});
    });
  })

  // GET: get all the jokes (accessed at GET http://localhost:8080/api/jokes)
  .get(function(req, res){
    Joke.find(function(err, jokes){
      if (err){
        res.send(err);
      }
      res.json(jokes);
    });
  });


// On individual Jokes ID URL
router.route('/jokes/:joke_id')
  // GET: individual jokes by id (accessed at GET http://localhost:8080/api/jokes/:joke_id)
  .get(function(req, res){
    Joke.findById(req.params.joke_id, function(err, joke){
      if (err){
        res.send(err);
      }
      res.json(joke);
    });
  })
  // PUT: update individual jokes by id (accessed at PUT http://localhost:8080/api/jokes/:joke_id)
  .put(function(req, res){
    Joke.findById(req.params.joke_id, function(err, joke){
      if (err){
        res.send(err);
      }
      joke.line = req.body.line;

      joke.save(function(err){
        if (err){
          res.send(err);
        }
        res.json({message: 'Joke updated!'});
      });
    });
  })
  // DELETE: delete individual jokes by id (accessed at DELETE http://localhost:8080/api/jokes/:joke_id)
  .delete(function(req, res){
    Joke.remove({
      _id: req.params.joke_id
    }, function(err, bear){
      if (err){
        res.send(err);
      }
      res.json({message: 'Successfully deleted'});
    });
  });

// ===REGISTER ROUTES===
// On /api, use router
app.use('/api', router);

// START SERVER
app.listen(port);
console.log('Listening to port', port);
