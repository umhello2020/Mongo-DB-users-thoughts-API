// importing the mongoose module
const { connect, connection } = require('mongoose');

// tying our connection string to a variable, this will make sure that we can connect to our database no matter the environment
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/thoughtsDB';

// connection itself
connect(connectionString);

// exporting the connection
module.exports = connection;