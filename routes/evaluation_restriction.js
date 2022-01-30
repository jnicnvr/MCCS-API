const express = require('express')
const router = express.Router();
const { create, index, show } = require('../app/Controllers/EvaluationRestrictionController.js')

router.get('/evaluation_restriction', index)
router.post('/evaluation_restriction', create)
router.get('/evaluation_restriction/:id', show)
// router.patch('/evaluation_restriction/:id', update)
// router.delete('/evaluation_restriction/:id', destroy)

module.exports = router;