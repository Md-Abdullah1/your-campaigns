// models/Lead.js
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define(
    "Lead",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
      },
      source: {
        type: DataTypes.STRING, // e.g., "Campaign: Summer Sale", "Organic"
      },
      status: {
        type: DataTypes.ENUM(
          "new",
          "contacted",
          "qualified",
          "converted",
          "lost"
        ),
        defaultValue: "new",
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Campaigns",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
    }
  );

  return Lead;
};
