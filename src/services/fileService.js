const path = require('path')

const uploadSingleFile = async (fileObject) => {
  // create the upload folder first
  const uploadPath = path.resolve(__dirname, `../public/images/upload`)

  //get image extension
  const extension = path.extname(fileObject.name)

  //get image's name (without extension)
  const fileName = path.basename(fileObject.name, extension)

  //create final path
  const finalName = `${fileName}-${Date.now()}${extension}`
  const finalPath = `${uploadPath}/${finalName}`

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(finalPath)
    return {
      status: 'success',
      path: finalName,
      error: null
    }
  } catch (error) {
    console.log('>>>> check err', error)

    return {
      status: 'failedd',
      path: null,
      error: JSON.stringify(error)
    }
  }
}

const uploadMultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, '../public/images/upload')

    let resultArr = []
    let countSuccess = 0
    for (let i = 0; i < filesArr.length; i++) {
      console.log('check i = ', i)
      //get image extension
      let extName = path.extname(filesArr[i].name)

      //get image's name (without extension)
      let baseName = path.basename(filesArr[i].name, extName)

      //create final path: eg: /upload/your-image.png
      let finalName = `${baseName}-${Date.now()}${extName}`
      let finalPath = `${uploadPath}/${finalName}`

      try {
        await filesArr[i].mv(finalPath)
        resultArr.push({
          status: 'success',
          path: finalName,
          fileName: filesArr[i].name,
          error: null
        })
        countSuccess++
      } catch (err) {
        resultArr.push({
          status: 'failed',
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err)
        })
      }
    }

    return {
      countSuccess: countSuccess,
      detail: resultArr
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles
}
