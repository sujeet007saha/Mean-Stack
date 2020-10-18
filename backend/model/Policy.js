const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
let policySchema = new Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model('Policy', policySchema)