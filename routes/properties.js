'use strict';

var express = require('express');
var router = express.Router();

var Property = require('../models/property');

// GET /api/properties
router.get('/', (req, res) => {
  Property.find({}, (err, properties) => {
    return err ? res.status(400).send(err) : res.send(properties);
  });
})

// POST /api/properties
router.post('/', (req, res) => {
  var property = new Property(req.body);
  property.save({new: true}, (err, property) => {
    return err ? res.status(400).send(err) : res.send(property);
  })
})

// DELETE /api/properties/:id
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  Property.findByIdAndRemove(id, (err) => {
    if(err) return res.status(400).send(err);
    else res.send(`id: ${id} Document deleted!`);
  })
})

// PUT /api/property/:id
router.put('/:id', (req, res) => {
  var id = req.params.id;
  Property.findByIdAndUpdate(id, { $set: req.body }, {new: true}, (err, property) => {
    if(err) return res.status(400).send(err);
    else res.send(property);
  })
})


module.exports = router;
