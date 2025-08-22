require("dotenv").config();

module.exports = {
  database: process.env.DB_NAME || "campaign_db",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "Abdullah@ahil.1",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
};
