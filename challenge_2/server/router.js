const express = require('express');
const router = express.Router();
const { valiDate, inOrder } = require('./validation');
const getBTCinfo = require('./coindeskapi');

router.get('/btc/:startDate/:endDate', (req, res) => {
  let startDate = req.params.startDate;
  let endDate = req.params.endDate;
  if (!valiDate(startDate) || !valiDate(endDate)) {
    res.status(400).send('Invalid start or end date');
  }
  if (!inOrder(startDate, endDate)) {
    [startDate, endDate] = [endDate, startDate]
  }
  getBTCinfo(startDate, endDate, (err, BTCinfo) => {
    if (err) {
      res.status(500).send('Error retrieving BTC info.');
    } else {
      res.status(200).json(BTCinfo);
    }
  })
});

module.exports = router;


