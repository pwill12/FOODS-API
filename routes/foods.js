const router = require('express').Router();

const Food = require('../Models/Foods')

router.post("/foods", async (req, res) => {
    const newFoods = new Food(req.body);
    try {
      const saved = await newFoods.save();
      res.status(200).json(saved);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET A PARTICULAR FOODITEM
  router.get("/find/:id", async (req, res) => {
    try {
      const foods = await Food.findById(req.params.id);
      res.status(200).json(foods);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL FOODITEMS

  router.get("/", async (req, res) => {
    try {
      const foods = await Food.find();
      res.status(200).json(foods)
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router