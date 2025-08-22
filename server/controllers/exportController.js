// controllers/exportController.js
const { Campaign } = require("../models/Campaign");
const json2csv = require("json2csv").Parser;

const exportCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      where: { userId: req.user.id },
      attributes: [
        "name",
        "description",
        "status",
        "budget",
        "startDate",
        "endDate",
        "clicks",
        "impressions",
        "conversions",
      ],
      raw: true,
    });

    const fields = [
      "name",
      "description",
      "status",
      "budget",
      "startDate",
      "endDate",
      "clicks",
      "impressions",
      "conversions",
    ];
    const json2csvParser = new json2csv({ fields });
    const csv = json2csvParser.parse(campaigns);

    res.header("Content-Type", "text/csv");
    res.header("Content-Disposition", "attachment; filename=campaigns.csv");
    res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  exportCampaigns,
};
