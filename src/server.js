require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const apiRRoutes = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOSTNAME || 'localhost'

// config file upload
app.use(fileUpload())

//config req.body
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded()) //Parse URL-encoded bodies

//config view engine
configViewEngine(app)

//config route
app.use('/', webRoute)
app.use('/v1/api', apiRRoutes)

//self runnning function
;(async () => {
  //test connection
  try {
    await connection()
    app.listen(port, hostname, () => {
      console.log(`Backend Nodejs app listening on port ${port}`)
    })
  } catch (error) {
    console.log('error connection db', error)
  }
})()
