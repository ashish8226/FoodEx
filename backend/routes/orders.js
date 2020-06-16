const express = require('express')
const Order = require('../models/order');
const router = express.Router();


router.route('/')
  .get(async (req, res) => {
      try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.send(400).json(err);
      }
    }
  )
  .post(async (req, res) => {
    const order = new Order(req.body);
    try {
      await order.save();
      res.status(201).json(order);
    } catch (err) {
      res.status(401).json(err);
    }
  });

router.route('/:orderId')
  .get(async (req, res) => {
    try {
      const order = await Order.findOne({_id: req.params.orderId})
      res.status(200).json(order);
    } catch (err) {
      res.status(404).json(err);
    }
  })
  .put(async (req, res) => {
    const _id = req.params.orderId;
    try{
      const order =  Order.findOneAndUpdate({_id}, req.body, {new: true});
      res.status(202).json(order);
    }catch(err) {
      res.status(400).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await Order.deleteOne({_id: req.params.orderId})
      res.status(204).json({'message': `order ${req.params.orderId} Cancelled`});
    } catch {
      res.status(404).json({error: "Order doesn't exist!"})
    }
  })


module.exports = router;
