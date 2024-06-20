// 1. import express module
const express = require('express');

// 2.Create express app
const app = express();

// 3. create a route
app.get('/', (request, responce) => {
    responce.send('Hello, World!');
});

// 4.run the server
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});