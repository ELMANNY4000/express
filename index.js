//import express
const express = require('express');
const router = require('./routes/product');
const app = express();
const port = 5002

app.get("/", (req, res) => {
    res.send('welcome to homepage')
})


const productRouter = require("./routes/product")
app.use(productRouter)

const usersRouter = require("./routes/users")
app.use(usersRouter)

app.listen(port, ( )=> {
    console.log("server started successfully")
})