const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,   //  DB name
  process.env.MYSQLUSER,       //  DB user
  process.env.MYSQLPASSWORD,   // DB password
  {
    host: process.env.MYSQLHOST, // DB host
    port: process.env.MYSQLPORT || 3306, //  DB port
    dialect: "mysql",
  }
);

module.exports = sequelize;


