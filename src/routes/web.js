const express = require('express')
const { getHomepage, getAboutPage, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/about', getAboutPage)

router.post('/create-user', postCreateUser)

module.exports = router
