const express = require('express')
const Table = require('../models/table');
const router = express.Router();


router.route('/')
  .get(async (req, res) => {
      try {
        const tables = await Table.find();
        res.status(200).json(tables);
      } catch (err) {
        res.send(400).json(err);
      }
    }
  )
  .post(async (req, res) => {
    const table  = new Table(req.body);
    try {
      await table.save();
      res.status(201).json(table) ;
    } catch (err) {
      res.status(401).json(err);
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const table = await Table.findOne({_id: req.params.id})
      res.status(200).json(table);
    } catch (err) {
      res.status(404).json(err);
    }
  })
  .put(async (req, res) => {
    const _id = req.params.id;
    try{
      const table =  Table.findOneAndUpdate({_id}, req.body, {new: true});
      res.status(202).json(table);
    }catch(err) {
      res.status(400).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await Order.deleteOne({_id: req.params.id})
      res.status(204).json({'message': `table ${req.params.id} cancelled`});
    } catch {
      res.status(404).json({error: "Table doesn't exist!"})
    }
  })


module.exports = router;
