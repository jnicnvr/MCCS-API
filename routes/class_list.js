const express = require('express')
const router = express.Router();
const { create, index, show, update, destroy } = require('../app/Controllers/ClasslistController')

router.get('/class_list', index)
router.post('/class_list', create)
router.get('/class_list/:id', show)
router.patch('/class_list/:id', update)
router.delete('/class_list/:id', destroy)

module.exports = router;