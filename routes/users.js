var express = require('express')
var router = express.Router();
const { create, index, show, update, destroy } = require('../app/Controllers/UserController.js')

router.get('/user', index)
router.post('/user', create)
router.get('/user/:id', show)
router.patch('/user/:id', update)
router.delete('/user/:id', destroy)

module.exports = router;