/* Imports */
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();     // TODO: Figure out what this does

/* App */
    // Instantiate an express_object.
    // This will handle HTTP requests coming from a *port
        // *Port yet to be specified 
const app = express();

/* db */
    // Connect to MongoDB database pointed to
    // by MONGO_URI. 
    //TODO: Figure out how then() and promises work
mongoose.connect(process.env.MONGO_URI)
.then( () => console.log('MongoDB connected'))
.catch( err => console.log("MongoDB connection error: ", err));

/* middleware */
    // express_object.use(func) passes [request, response]
    // through func as params for *every* HTTP request
    // Any function used in this fashion is considered a 'middleware' function
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));


/* routes */
    // Here, we import a express.Router object. Router objects essentially
    // contain multiple routes within themselves.
    // express_object.use(req, testRoutes) routes all requests
    // that start w/ 'req'  to the testRoutes express.Router object
const testRoutes = require('./routes/test');
app.use('/', testRoutes);


/* listen */
    // Binds PORT to listen for HTTP requests
    // Connects PORT to express_object, app
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})