const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const composeSchema = new Schema({
  composeTitle: String,
  composeBody: String,
  composeLBBody: Array
});

module.exports = compose = mongoose.model('blog',composeSchema);
