/* Imports */
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();     // TODO: Figure out what this does

/* App */
const app = express();

/* db */
mongoose.connect(process.env.MONGO_URI)
.then( () => console.log('MongoDB connected'))
.catch( err => console.log("MongoDB connection error: ", err));

/* middleware */
// TODO: Figure out this shit
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));


/* routes */
const testRoutes = require('./routes/test');
app.use('/', testRoutes);


/* listen */
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})