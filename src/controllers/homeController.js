const connection = require('../config/database')

const getHomepage = (req, res) => {
  return res.render('home.ejs')
}

const getAboutPage = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  console.log(req.body)
  const { email, name, city } = req.body

  // Using placeholders
  connection.query(
    `
    INSERT INTO Users (email, name, city) VALUES (?, ?, ?)
  `,
    [email, name, city],
    function (err, results) {
      console.log(results)
      res.send('Create user successfully!')
    }
  )
}

module.exports = {
  getHomepage,
  getAboutPage,
  postCreateUser
}
