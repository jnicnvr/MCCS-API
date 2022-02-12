var express = require('express')
var router = express.Router();
const { login, register, login_admin, register_admin } = require('../app/Controllers/AuthController.js');

router.post('/login', login)
router.post('/register', register)

router.post('/login_admin', login_admin)
router.post('/register_admin', register_admin)


module.exports = router;
