const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('driver', {
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.JSONB
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