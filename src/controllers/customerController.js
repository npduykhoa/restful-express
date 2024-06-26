const { uploadSingleFile } = require('../services/fileService')
const {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService,
  deleteACustomerService,
  deleteManyCustomerService
} = require('../services/customerService')
module.exports = {
  postCreateCustomer: async (req, res) => {
    const { name, email, address, phone, description } = req.body

    let imageUrl = ''
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    } else {
      let result = await uploadSingleFile(req.files.image)
      imageUrl = result.path
    }

    let customerData = {
      name,
      email,
      address,
      phone,
      description,
      image: imageUrl
    }
    let customer = await createCustomerService(customerData)
    return res.status(200).json({ errorCode: 0, data: customer })
  },

  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers)
    if (customers) {
      return res.status(200).json({ errorCode: 0, data: customers })
    } else {
      return res.status(400).json({ errorCode: -1, data: customers })
    }
  },

  getCustomersAPI: async (req, res) => {
    console.log(req.query)
    let limit = req.query.limit
    let page = req.query.page
    let name = req.query.name
    let result = []
    if (limit && page) {
      result = await getCustomersService(limit, page, name)
    } else {
      result = await getCustomersService()
    }
    return res.status(200).json({ errorCode: 0, data: result })
  },

  putUpdateCustomersAPI: async (req, res) => {
    let customer = await updateCustomerService(req.body)
    if (customer) {
      return res.status(200).json({ errorCode: 0, data: customer })
    } else {
      return res.status(400).json({ errorCode: -1, data: customer })
    }
  },

  deleteACustomerAPI: async (req, res) => {
    let customer = await deleteACustomerService(req.body)
    if (customer) {
      return res.status(200).json({ errorCode: 0, data: customer })
    } else {
      return res.status(400).json({ errorCode: -1, data: customer })
    }
  },

  deleteManyCustomerAPI: async (req, res) => {
    const { customerIds } = req.body
    let result = await deleteManyCustomerService(customerIds)
    if (result) {
      return res.status(200).json({ errorCode: 0, data: result })
    } else {
      return res.status(400).json({ errorCode: -1, data: result })
    }
  }
}
