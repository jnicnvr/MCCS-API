const express = require('express')
const router = express.Router();
const { create, index, show } = require('../app/Controllers/AdminLogsController.js')

router.get('/admin_logs', index)
router.post('/admin_logs', create)
router.get('/admin_logs/:id', show)

module.exports = router; 