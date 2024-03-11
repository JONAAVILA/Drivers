const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lasName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    timestamps: false
  });
};