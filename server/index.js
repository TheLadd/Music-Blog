/* Imports */
const express = require('express');
const mongoose = require('./db.js') // Connected to MongoDB in this module for modularity's sake
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();     // Reads .env file, essentialy 

/* App */
    // Instantiate an express_object.
    // This will handle HTTP requests coming from a port
        // *Port yet to be specified 
const app = express();

/* middleware */
    // express_object.use(func) passes [request, response]
    // through func as params for *every* HTTP request
    // Any function used in this fashion is considered a 'middleware' function
const corsOptions = { origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL] }
app.use(cors(corsOptions));
app.use(morgan('dev'));

// Important middlewares for receiving/deciphering JSON strings via HTTP
app.use(express.json())
app.use(express.urlencoded())


/* routes */
    // Here, we import a express.Router object. Router objects essentially
    // contain multiple routes within themselves.
    // express_object.use(req, testRoutes) routes all requests
    // that start w/ 'req'  to the testRoutes express.Router object
const blogRoutes = require('./routes/blog')
app.use('/blog', blogRoutes)

const portfolioRoutes = require('./routes/portfolio')
app.use('/portfolio', portfolioRoutes)

app.use('/', blogRoutes)

/* listen */
    // Binds PORT to listen for HTTP requests
    // Connects PORT to express_object, app
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})