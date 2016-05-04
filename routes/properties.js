'use strict';

var express = require('express');
var router = express.Router();

// GET /api/properties
router.get('/', (req, res) => {
  res.send('Hello from /api/properties\n');
})

module.exports = router;
