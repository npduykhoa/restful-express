const express = require('express')

const routerAPI = express.Router()

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI
} = require('../controllers/apiController')

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getCustomersAPI,
  putUpdateCustomersAPI
} = require('../controllers/customerController')

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileAPI)
routerAPI.post('/files', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
routerAPI.get('/customers', getCustomersAPI)
routerAPI.put('/customers', putUpdateCustomersAPI)
module.exports = routerAPI
