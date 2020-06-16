const express = require('express')
const Chef = require('../models/chef');
const router = express.Router();


router.route('/')
  .get(async (req, res) => {
      try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
      } catch (err) {
        res.send(400).json(err);
      }
    }
  )
  .post(async (req, res) => {
    const chef = new Chef(req.body);
    try {
      await chef.save();
      res.status(201).json(chef);
    } catch (err) {
      res.status(401).json(err);
    }
  })


module.exports = router;
