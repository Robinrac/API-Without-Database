// Fetch express package
const express = require("express")

// Fetch data from .env file
const dotenv = require("dotenv").config();

//calling a server start
const app = express ()

// creating variable port using PORT value.
// PORT value is fetched from .env , If .env value is missing makes 4000 the PORT value
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use('/api/candies', require('./routes/candyRoutes'))

//displays a message when starting server
app.listen(port,() => console.log(`Starting server through PORT: ${port} `))