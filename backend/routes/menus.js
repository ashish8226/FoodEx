const express = require('express')
const Menu = require('../models/menu');
const router = express.Router();


router.route('/')
  .get((req, res) => {
    Menu.find({}, (err, menus) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(menus);
      }
    });

  })
  .post((req, res) => {
    const menu = new Menu(req.body);
    //   {
    //   name: req.body.name,
    //   description: req.body.description,
    //   price: req.body.price,
    //   imageUrl: req.body.imageUrl,
    //   heartCounts: req.body.heartCounts,
    //   liked_by_id: req.body.liked_by_id,
    //   timestamp: req.body.timestamp
    // }
    menu.save((err, menu) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(menu);
      }
    })
  });

router.route('/:menuId')
  .get((req, res) => {
    const _id = req.params.menuId;
    Menu.findOne({_id}, (err, menu) => {
      if (err) {
        res.status(400).json(err);
      } else if (!menu) {
        res.status(404).json({'message': 'menu not found'});
      } else {
        res.json(menu);
      }
    });
  })
  // .post((req, res) => {
  //   const menu = new Menu(req.body);
  //   menu.save((err, menu) => {
  //     if (err) {
  //       res.status(400).json(err);
  //     } else {
  //       res.json(menu);
  //     }
  //   });
  //
  // })
  .put((req, res) => {
    const _id = req.params.menuId;
    Menu.findOneAndUpdate({_id}, req.body,{new: true}, (err, menu) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(menu);
      }
    })

  })
  .delete((req, res) => {
    const _id = req.params.menuId;
    Menu.findOneAndRemove({_id}, (err, menu) => {
      if (err) {
        res.status(400).json(err);
      } else if (!menu) {
        res.status(404).json({'message': 'menu not found'});
      } else {
        res.json({message: `Menu ${menu._id} deleted.`});
      }
    });
  })
module.exports = router;
