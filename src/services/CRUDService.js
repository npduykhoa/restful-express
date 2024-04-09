const connection = require('../config/database')

const getAllUsers = async () => {
  const [results, fields] = await connection.query('SELECT * FROM Users u')
  return results
}

module.exports = {
  getAllUsers
}
