const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // ✅ read host from environment
    dialect: "mysql",
    port: 3306,
  }
);
