const router = require('express').Router();
const { Candy } = require('../db/index');
router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
