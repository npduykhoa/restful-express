const connection = require('../config/database')

const getAllUsers = async () => {
  const [results, fields] = await connection.query('SELECT * FROM Users u')
  return results
}

const getUserById = async (userId) => {
  const [results, fields] = await connection.query('SELECT * FROM Users u WHERE u.id = ?', [userId])
  const user = results && results.length > 0 ? results[0] : {}
  return user
}

const updateUserById = async (userId, email, name, city) => {
  const [results, fields] = await connection.query(
    `
      UPDATE Users
      SET email = ?, city = ?, name = ?
      WHERE id = ?
    `,
    [email, city, name, userId]
  )

  return results
}

const deleteUserById = async (userId) => {
  const [results, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [userId])
  return results
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
}
