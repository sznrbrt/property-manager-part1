'use strict';

var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
  address: { type: String, required: true},
  status: { type: String, required: true, default: 'N/A'},
  roomNum: { type: Number, required: true},
  rentPrice: { type: Number, required: true},
  utilCost: { type: Number},
  tenants: [{ type: String}]
});

var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
