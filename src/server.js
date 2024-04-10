require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')

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

const kittySchema = new mongoose.Schema({
  name: String
})

const Kitten = mongoose.model('Kitten', kittySchema)
const cat = new Kitten({ name: 'Khoa Nguyen cat' })
cat.save()

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
