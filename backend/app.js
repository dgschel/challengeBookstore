require('dotenv').config() // read in environment file on application startup
require('./config/db') // start database connection
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const bookRoute = require('./route/book')
const authorRoute = require('./route/author')

// setting middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors()) // enable all http methods

// setting routes
app.use('/api/books', bookRoute)
app.use('/api/authors', authorRoute)

const port = process.env.PORT || 3000 // get the port of the current system or 3000

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})