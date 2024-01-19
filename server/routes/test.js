const express = require('express')

/* Import Controllers */
const { getTest } = require('../controllers/test')


/* API Routes */
    // Create a express.router object
    // Map all requests of '/test' to the getTest function
const router = express.Router()
router.get('/test', getTest);


/* Export this route */
module.exports = router;