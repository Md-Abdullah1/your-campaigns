// // models/index.js
// const sequelize = require("../config/database");
// const User = require("./User")(sequelize);
// const Campaign = require("./Campaign")(sequelize);

// // Define associations
// User.hasMany(Campaign, { foreignKey: "userId", onDelete: "CASCADE" });
// Campaign.belongsTo(User, { foreignKey: "userId" });

// const db = {
//   sequelize,
//   User,
//   Campaign,
// };

// server/models/index.js
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("campaign_db", "postgres", "Abdullah@ahil.1", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // turn off SQL query logs in console
});

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected..."))
  .catch((err) => console.error("❌ Error: " + err));

const db = {};

// Import models
db.User = require("./User")(sequelize, DataTypes);

// Add more models here later
// db.Campaign = require("./Campaign")(sequelize, DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
