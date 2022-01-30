const express = require('express')
const router = express.Router();
const { create, index, show, update, destroy } = require('../app/Controllers/TeacherController.js')

router.get('/teacher', index)
router.post('/teacher', create)
router.get('/teacher/:id', show)
router.patch('/teacher/:id', update)
router.delete('/teacher/:id', destroy)

module.exports = router; 