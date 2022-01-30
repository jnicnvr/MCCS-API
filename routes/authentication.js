var express = require('express')
var router = express.Router();
const { login, register} = require('../app/Controllers/AuthController.js')

router.post('/login', login)
router.post('/register', register)

module.exports = router;
