const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const connection = require('knex')(config);

module.exports = {
  getUsers: getUsers
};

function getUsers(testConn) {
  const conn = testConn || connection;
  return conn('users').select();
}
