// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("campaign_db", "postgres", "Abdullah@ahil.1", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false, // turn off SQL query logs in console
// });

// // Test connection
// sequelize
//   .authenticate()
//   .then(() => console.log("✅ Database connected..."))
//   .catch((err) => console.error("❌ Error: " + err));

// const db = {};

// // Import models
// db.User = require("./User")(sequelize, DataTypes);

// // Add more models here later
// // db.Campaign = require("./Campaign")(sequelize, DataTypes);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// models/index.js
const { Sequelize } = require("sequelize");
const config = require("../config/database"); // ← DB config from .env

// Create Sequelize instance
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    logging: false,
  }
);

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected..."))
  .catch((err) => console.error("❌ DB connection error:", err));

const db = {};

// Load models
db.User = require("./User")(sequelize, Sequelize);
db.Campaign = require("./Campaign")(sequelize, Sequelize);
db.Lead = require("./Lead")(sequelize, Sequelize); // if exists

// Define associations
db.User.hasMany(db.Campaign, { foreignKey: "userId", onDelete: "CASCADE" });
db.Campaign.belongsTo(db.User, { foreignKey: "userId" });

db.Campaign.hasMany(db.Lead, { foreignKey: "campaignId", onDelete: "CASCADE" });
db.Lead.belongsTo(db.Campaign, { foreignKey: "campaignId" });

// Export
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
