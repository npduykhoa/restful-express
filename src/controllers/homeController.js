const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
  const results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results })
}

const getAboutPage = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
  console.log(req.body)
  const { email, name, city } = req.body

  // Using placeholders
  // connection.query(
  //   `
  //   INSERT INTO Users (email, name, city) VALUES (?, ?, ?)
  // `,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results)
  //     res.send('Create user successfully!')
  //   }
  // )

  // connection.query('SELECT * FROM Users u', function (err, results, fields) {
  //   console.log(results) // results contains rows returned by server
  // })
  const [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [
    email,
    name,
    city
  ])

  res.send('Create user successfully!')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

module.exports = {
  getHomepage,
  getAboutPage,
  postCreateUser,
  getCreatePage
}
