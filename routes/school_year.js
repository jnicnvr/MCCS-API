const express = require('express')
const router = express.Router();
const { create, index, show, update, destroy, show_status } = require('../app/Controllers/SchoolYearController.js')

router.get('/school_year', index)
router.post('/school_year', create)
router.get('/school_year/:id', show)
router.get('/school_year_status/:id', show_status)
router.patch('/school_year/:id', update)
router.delete('/school_year/:id', destroy)

module.exports = router;