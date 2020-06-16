const express = require('express')
const User = require('../models/user');
const router = express.Router();


router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json(err);
  }
});

router.route('/:id')
  .get(async (req, res) => {
    try {
      const user = await User.findOne({_id: req.params.id})
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json(err);
    }
  })
  .put(async (req, res) => {
    const _id = req.params.id;
    try {
      const user = User.findOneAndUpdate({_id}, req.body, {new: true});
      res.status(202).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await User.deleteOne({_id: req.params.id})
      res.status(204).json({'message': `User ${req.params.id} deleted`});
    } catch {
      res.status(404).json({error: "User doesn't exist!"})
    }
  })


module.exports = router;
