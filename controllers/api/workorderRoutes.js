const router = require('express').Router();
const { Workorder } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const workOrderData = await Workorder.create(req.body);

    req.session.save(() => {
      req.session.workorder_id = workOrderData.id;
      req.session.logged_in = false;

      res.status(200).json(workOrderData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});