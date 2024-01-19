const express = require('express')
const router = express.Router()

/* Import Controllers */


/* Import Controllers */
const { getTest } = require('../controllers/test')


/* API Routes */
router.get('/test', getTest);


/* Export this route */
module.exports = router;