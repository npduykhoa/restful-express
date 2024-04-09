const getHomepage = (req, res) => {
  res.send('Hello World! NPDK')
}

const getAboutPage = (req, res) => {
  res.render('sample.ejs')
}

module.exports = {
  getHomepage,
  getAboutPage
}
