// routes/dashboardRoutes.js
const express = require("express");
const { getKPIs, getChartData } = require("../controllers/dashboardController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/kpis", auth, getKPIs);
router.get("/chart-data", auth, getChartData);

module.exports = router;
