const express = require('express')
const router = express.Router();
const { create, index, show, update, destroy } = require('../app/Controllers/SubjectController.js')

router.get('/subject', index)
router.post('/subject', create)
router.get('/subject/:id', show)
router.patch('/subject/:id', update)
router.put('/subject/:id', update)
router.delete('/subject/:id', destroy)

module.exports = router;