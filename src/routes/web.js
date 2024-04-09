const express = require('express')
const { getHomepage, getAboutPage } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/about', getAboutPage)

module.exports = router
