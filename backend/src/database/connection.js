const knex = require('knex');
const configs = require('../../knexfile');

const { NODE_ENV = 'development' } = process.env;

const connection = knex(configs[NODE_ENV]);

module.exports = connection;
