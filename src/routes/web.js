const express = require('express')
const { getHomepage, getAboutPage, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/about', getAboutPage)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router
