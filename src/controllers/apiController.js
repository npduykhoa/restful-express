const User = require('../models/user') //mongoose model

const getUsersAPI = async (req, res) => {
  const results = await User.find({})

  return res.status(200).json({ errorCode: 0, users: results })
}

const postCreateUserAPI = async (req, res) => {
  const { email, name, city } = req.body

  const user = await User.create({ email, name, city })

  return res.status(200).json({ errorCode: 0, user })
}

const putUpdateUserAPI = async (req, res) => {
  const { email, name, city, userId } = req.body
  // await updateUserById(userId, email, name, city)
  const user = await User.updateOne({ _id: userId }, { email, name, city }).exec()

  return res.status(200).json({ errorCode: 0, user })
}

const deleteUserAPI = async (req, res) => {
  const userId = req.body.userId
  // await deleteUserById(userId)
  const user = await User.deleteOne({ _id: userId }).exec()
  return res.status(200).json({ errorCode: 0, user })
}

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI
}
