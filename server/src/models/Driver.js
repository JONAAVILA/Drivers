const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
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
      type: DataTypes.STRING
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