require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOSTNAME || 'localhost'

//config req.body
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded()) //Parse URL-encoded bodies

//config view engine
configViewEngine(app)

//config route
app.use('/', webRoute)

//test connection
connection()

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
