// controllers/leadController.js
const { Lead, Campaign } = require("../models");

// Get all leads for a campaign (user must own the campaign)
const getLeadsByCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      where: { id: req.params.campaignId, userId: req.user.id },
    });

    if (!campaign) {
      return res
        .status(404)
        .json({ message: "Campaign not found or access denied" });
    }

    const leads = await Lead.findAll({
      where: { campaignId: campaign.id },
      order: [["createdAt", "DESC"]],
    });

    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a lead (could be public or internal)
const createLead = async (req, res) => {
  try {
    const { campaignId, name, email, phone, source } = req.body;

    // Optional: Check if campaign exists and is active
    const campaign = await Campaign.findByPk(campaignId);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      source: source || `Campaign: ${campaign.name}`,
      campaignId,
    });

    // Optional: Update campaign metrics
    await campaign.increment("conversions"); // since lead = conversion

    res.status(201).json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update lead status
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findOne({
      where: {
        id: req.params.id,
        "$campaign.userId$": req.user.id, // Join with campaign to verify ownership
      },
      include: [
        {
          model: Campaign,
          required: true,
        },
      ],
    });

    if (!lead) {
      return res
        .status(404)
        .json({ message: "Lead not found or access denied" });
    }

    Object.assign(lead, req.body);
    await lead.save();

    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
// Add this function
const getAllLeads = async (req, res) => {
    try {
      const leads = await Lead.findAll({
        include: [{
          model: Campaign,
          where: { userId: req.user.id },
          attributes: ['name'],
        }],
        order: [['createdAt', 'DESC']],
      });
  
      // Flatten response
      const result = leads.map(lead => ({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        status: lead.status,
        source: lead.source,
        campaignId: lead.campaignId,
        campaignName: lead.Campaign.name,
        createdAt: lead.createdAt,
      }));
  
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
module.exports = {
  getLeadsByCampaign,
  createLead,
  updateLead,
  getAllLeads
};
