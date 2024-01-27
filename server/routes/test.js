const express = require('express')

/* API Routes */
    // Create a express.router object
    // Map all requests of '/test' to the getTest function
const router = express.Router()
router.get('/', async (request, response) => {
    response.status(200).json({
        message: "Test route is working"
    });
})



/* Export this route */
module.exports = router;