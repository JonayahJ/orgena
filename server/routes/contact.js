const express = require('express');
const router = express.Router();

const {emailContact} = require('../controllers/contact')

router.get('/', emailContact);

router.post('/contact', function(req, res, next) {

    console.log(res);
});

module.exports = router;