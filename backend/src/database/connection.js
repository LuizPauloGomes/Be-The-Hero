const knex = require('knex');
const configuretion  = require('../../knexfile');

const connection = knex(configuretion.development);

module.exports = connection;