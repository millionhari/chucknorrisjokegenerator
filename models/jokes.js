var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JokesSchema = new Schema({
  line: String
});

module.exports = mongoose.model('Joke', JokesSchema);
