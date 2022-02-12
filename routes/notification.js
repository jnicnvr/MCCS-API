const express = require('express')
const router = express.Router();
const { evaluated_faculty, index, show, ny_evaluated, evaluating_faculty } = require('../app/Controllers/NotificationController.js');

router.get('/notification', index)
router.post('/evaluated_faculty', evaluated_faculty)
router.get('/notification/:id', show)
router.get('/not_yet_evaluated', ny_evaluated)
router.post('/evaluating_faculty', evaluating_faculty)

module.exports = router;