const express = require('express')
const {
  getHomepage,
  getAboutPage,
  postCreateUser,
  postUpdateUser,
  getCreatePage,
  getUpdatePage,
  postDeleteUser,
  postHandleRemoveUser
} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/about', getAboutPage)
router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)
module.exports = router
