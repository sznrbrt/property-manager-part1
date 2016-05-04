'use strict';

var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  phone: { type: String, required: true},
  prefNumRooms: { type: Number, required: true},
  status: { type: String },
  properties: [{ type: String}]
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
