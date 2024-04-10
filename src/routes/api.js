const express = require('express')

const routerAPI = express.Router()

const { getUsersAPI } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => res.send('Hello from API'))
routerAPI.get('/abc', (req, res) => {
  res.status(200).json({ message: 'Hello from API' })
})

routerAPI.get('/users', getUsersAPI)

module.exports = routerAPI
