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

const getCustomersService = async () => {
  try {
    let result = await Customer.find({}).exec()
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

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService
}