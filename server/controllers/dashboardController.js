// controllers/dashboardController.js
const { Campaign } = require("../models");

const getKPIs = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      where: { userId: req.user.id },
    });

    const leads = await Lead.findAll({
      include: [
        {
          model: Campaign,
          where: { userId: req.user.id },
        },
      ],
    });

    const totalCampaigns = campaigns.length;
    const activeCampaigns = campaigns.filter(
      (c) => c.status === "active"
    ).length;
    const totalSpend = campaigns.reduce(
      (sum, c) => sum + parseFloat(c.budget),
      0
    );
    const totalConversions = leads.length; // Now based on leads
    const conversionRate =
      totalCampaigns > 0
        ? ((totalConversions / totalSpend) * 100).toFixed(2)
        : 0;

    res.json({
      totalCampaigns,
      activeCampaigns,
      totalSpend: Math.round(totalSpend * 100) / 100,
      totalConversions,
      conversionRate,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getChartData = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      where: { userId: req.user.id },
      order: [["startDate", "ASC"]],
    });

    const labels = campaigns.map((c) => c.name);
    const data = campaigns.map((c) => c.conversions);

    res.json({
      labels,
      datasets: [
        {
          label: "Conversions",
          data,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
        },
      ],
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getKPIs,
  getChartData,
};
