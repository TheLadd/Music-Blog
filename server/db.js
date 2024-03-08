const mongoose = require('mongoose')
require('dotenv').config();     // Reads .env 

mongoose.connect(process.env.MONGO_URI)
    .then( () => console.log('MongoDB connected'))
    .catch( err => {
        console.log("MongoDB connection error: ", err);
        process.exit(1);
    });

mongoose.set('setDefaultsOnInsert', true)

module.exports = mongoose;