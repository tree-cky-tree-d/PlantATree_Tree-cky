const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_f55ZV42ViacUfxEFazg1s4Q900MkwWzGs6"); // secret stripe api key

// router.post('/', (req, res) => {
//   return stripe.charges
//     .create({
//       amount: req.body.amount, // Unit: cents
//       source: req.body.tokenId,
//       currency: 'nzd',
//       description: 'Test payment',
//     })
//     .then(result => res.status(200).json(result));
// });



const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

router.get("/", (req, res) => {
  res.send({
    message: "Hello Stripe checkout server!",
    timestamp: new Date().toISOString()
  });
});

router.post("/", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(res));
});


module.exports = router;