const express = require('express')
const router = express.Router();
const { create, index, show, fetch_rating, create_feedback } = require('../app/Controllers/RatingController.js')

router.get('/rating', index)
router.post('/rating', create)
router.get('/rating/:id', show)
router.post('/fetch_rating', fetch_rating)

router.post('/create_feedback', create_feedback)


module.exports = router;