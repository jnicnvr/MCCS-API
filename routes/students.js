const express = require('express')
const router = express.Router();
const { create, index, show, update, destroy } = require('../app/Controllers/StudentController.js')

router.get('/student', index)
router.post('/student', create)
router.get('/student/:id', show)
router.patch('/student/:id', update)
router.delete('/student/:id', destroy)

module.exports = router;