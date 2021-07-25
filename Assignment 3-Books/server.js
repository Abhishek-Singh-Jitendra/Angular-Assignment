const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
    resp.send("Welcome !");
})
const BookController = require('./controller.books');
const router = require("express").Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/books', BookController.findAllBooks);

app.use('/api/books', router);
app.listen(port, () => { console.log("Server runnint http://localhost:3000 "); })