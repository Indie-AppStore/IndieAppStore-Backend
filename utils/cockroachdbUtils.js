const { Sequelize } = require('sequelize');
const { COCKROACHDB_URI } = process.env;

const sequelize = new Sequelize(COCKROACHDB_URI, {
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;
