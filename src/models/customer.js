const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    city: String,
    address: String,
    phone: String,
    image: String,
    description: String
  },
  { timestamps: true }
)

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer
