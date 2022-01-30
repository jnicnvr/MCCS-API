const express = require('express')
const router = express.Router();
const { create, index, show } = require('../app/Controllers/RatingController.js')

router.get('/rating', index)
router.post('/rating', create)
router.get('/rating/:id', show)

module.exports = router;