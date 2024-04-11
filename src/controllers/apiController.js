const User = require('../models/user') //mongoose model
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService')
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

const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  let result = await uploadSingleFile(req.files.image)
  console.log('result', result)

  return res.send('Upload single file successfully!')
}

const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }
  // console.log(req.files);
  //upload single => files is an object
  //upload multiple => files is an array
  if (Array.isArray(req.files.image)) {
    //upload multiple
    let result = await uploadMultipleFiles(req.files.image)
    return res.status(200).json({
      EC: 0,
      data: result
    })
  } else {
    //upload single
    return await postUploadSingleFileApi(req, res)
  }
}

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI
}
