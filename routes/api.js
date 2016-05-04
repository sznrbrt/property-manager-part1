'use strict';

var express = require('express');
var router = express.Router();

// /api/

router.use('/properties', require('./properties'));

// router.use('/properties', require('./properties'));

module.exports = router;
