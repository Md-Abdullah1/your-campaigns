const express = require("express");

// importing Routes
const authRoutes = require("./authRoute");
const campaignRoutes = require("./campaignRoute");
const dashboardRoutes = require("./dashboardRoute");
const exportRoutes = require("./exportRoute");
const leadRoutes = require("./leadRoute");

// route configurations
const router = express.Router();

// ----auth routes----
router.use("/auth", authRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/export", exportRoutes);
router.use("/leads", leadRoutes);

router.use("/", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    url: req.baseUrl,
    message: "API not found",
  });
});
// Uncomment this line
module.exports = router;
