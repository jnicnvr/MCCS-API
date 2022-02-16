const express = require('express')
const router = express.Router();
const { create, index, show } = require('../app/Controllers/FeedbackController.js')

router.get('/feedback', index)
router.get('/feedback/:id', show)
router.post('/feedback', create)

module.exports = router;