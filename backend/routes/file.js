const express = require('express');
const router = express.Router();
const service = require('../services/file');

router.get('/', async function(req, res, next) {
  try {
    res.json(await service.getData(req.query.page));
  } catch (err) {
    console.error(`Error while fetching data `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await service.create(req.body));
    } catch (err) {
      console.error(`Error while creating data`, err.message);
      next(err);
    }
});


router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await service.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting data`, err.message);
      next(err);
    }
});

module.exports = router;