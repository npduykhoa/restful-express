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

module.exports = {
  createCustomerService,
  createArrayCustomerService
}
