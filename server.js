// import express, our connection, and our routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// this gives access to the port no matter the environment
const PORT = process.env.PORT || 3001;
const app = express();

// middleware function to parse urlencoded data and json data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// open our server 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server API running on port ${PORT}!`);
    });
});