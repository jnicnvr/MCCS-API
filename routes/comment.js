const express = require('express')
const router = express.Router();
const { create, index, show, update } = require('../app/Controllers/CommentController.js')

router.get('/comment', index)
router.post('/comment', create)
router.get('/comment/:id', show)
router.patch('/comment/:id', update)
// router.delete('/comment/:id', destroy)

module.exports = router;