const express = require('express')
const router = express.Router();
const { create, index, show } = require('../app/Controllers/UserLogsController.js')

router.get('/user_logs', index)
router.post('/user_logs', create)
router.get('/user_logs/:id', show)

module.exports = router; 