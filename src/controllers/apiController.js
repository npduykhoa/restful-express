const User = require('../models/user') //mongoose model

const getUsersAPI = async (req, res) => {
  const results = await User.find({})

  return res.status(200).json({ errorCode: 0, users: results })
}

module.exports = {
  getUsersAPI
}
