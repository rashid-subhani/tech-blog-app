require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,      // DB name
  process.env.DB_USER,      // DB user
  process.env.DB_PASSWORD,  // DB password
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
  }
);

module.exports = sequelize;
