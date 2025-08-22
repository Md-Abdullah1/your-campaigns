// controllers/campaignController.js
const { Campaign } = require("../models/Campaign");

// Get all campaigns for logged-in user
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(campaigns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single campaign
const getCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create campaign
const createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(campaign);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update campaign
const updateCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    Object.assign(campaign, req.body);
    await campaign.save();

    res.json(campaign);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete campaign
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    await campaign.destroy();
    res.json({ message: "Campaign removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllCampaigns,
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
};
