// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const indexRoute = require("./routes");
const db = require("./models");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Campaign Management API is running...");
});

// ----Routes----
app.use("/api", indexRoute);

// Sync DB & Start Server
const PORT = process.env.PORT || 5000;

// sequelize
//   .sync({ alter: true }) // Use { force: true } to drop tables

//   .then(() => {
//     console.log("PostgreSQL connected and models synced");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Database sync error:", err);
//   });

// Sync database
db.sequelize
  .sync({ alter: true }) // alter:true auto-updates table columns
  .then(() => {
    console.log("✅ Database & tables synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Sync error: " + err));
