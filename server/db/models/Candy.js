const Sequelize = require('sequelize');
const db = require('../database');
const OP = Sequelize.Op;

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    [OP.lte]: 10,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/candytopia-ft-blog1117.jpg?itok=wwzj6Kdz',
  },
});
