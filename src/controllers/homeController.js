const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
  const results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results })
}

const getAboutPage = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body

  const [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [
    email,
    name,
    city
  ])

  res.send('Create user successfully!')
}

const postUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body
  console.log('req.body', req.body)
  await updateUserById(userId, email, name, city)

  // res.send('Updated user successfully!')
  res.redirect('/')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)
  res.render('edit.ejs', { userEdit: user })
}

const postDeleteUser = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)
  // const [results, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [userId])
  res.render('delete.ejs', { userDelete: user })
}

const postHandleRemoveUser = async (req, res) => {
  const userId = req.body.userId
  await deleteUserById(userId)
  res.redirect('/')
}

module.exports = {
  getHomepage,
  getAboutPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser
}
