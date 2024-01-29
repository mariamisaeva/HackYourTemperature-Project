//import express from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {

    response.send('hello from backend to frontend!');

});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});