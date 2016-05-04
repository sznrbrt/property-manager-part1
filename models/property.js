'use strict';

var mongoose = require('mongoose');

var Property = mongoose.model('Property', {
  address: String,
  status: String,
  roomNum: Number,
  rentPrice: Number,
  utilCost: Number
});

module.exports = FlashCard;
