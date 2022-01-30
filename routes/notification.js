const express = require('express')
const router = express.Router();
const { evaluated_faculty, index, show } = require('../app/Controllers/NotificationController.js')

router.get('/notification', index)
router.post('/evaluated_faculty', evaluated_faculty)
router.get('/notification/:id', show)

module.exports = router;