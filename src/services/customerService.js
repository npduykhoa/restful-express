const Customer = require('../models/customer')

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create(customerData)
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const createArrayCustomerService = async (customers) => {
  try {
    let result = await Customer.insertMany(customers)
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const getCustomersService = async (limit, page, name) => {
  console.log('name', name)
  try {
    let result = null
    if (limit && page) {
      let skip = (page - 1) * limit
      if (name) {
        result = await Customer.find({ name: { $regex: '.*' + name + '.*' } })
          .skip(skip)
          .limit(limit)
          .exec()
      } else result = await Customer.find({}).skip(skip).limit(limit).exec()
    } else {
      result = await Customer.find({}).exec()
    }

    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const updateCustomerService = async (customer) => {
  try {
    let result = await Customer.updateOne({ _id: customer._id }, customer).exec()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
const deleteACustomerService = async (customer) => {
  try {
    let result = await Customer.deleteById({ _id: customer._id })
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const deleteManyCustomerService = async (customerIds) => {
  try {
    let result = await Customer.delete({ _id: { $in: customerIds } }).exec()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService,
  deleteACustomerService,
  deleteManyCustomerService
}
