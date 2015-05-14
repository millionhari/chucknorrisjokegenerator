var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// CREATE ROUTES
var router = express.Router();

// On /api, use router
app.use('/api', router);

// REGISTER ROUTES
// test route to make sure everything is working (accessed at GET http://localhost:8080/api/{{whatever here}} < look at line 19)
router.get('/', function(req, res){
  res.json({message: 'hooray! welcome to our api'});
});


// START SERVER
app.listen(port);
console.log('Listening to port', port);
