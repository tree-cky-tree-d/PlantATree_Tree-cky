const express = require('express');
const router = express.Router();

const cartModel = require("../models/cart");
const Cart = new cartModel.constructor();

router.get('/', async (req, res) => {
    try {
        res.send( Cart );
    } catch (err) {
        res.status(400).send({ error: err });
    }
})

router.get('/:id', async (req, res) => {
    try{
        if(req.params.id != ""){
            var treeIndex = await Cart.checkItem(req.params.id);
            res.send(Cart.trees[treeIndex]);
        } else {
            send(Cart);
        }
    } catch {
        res.status(400).send({ error: err});
    }
})

router.post('/added', async (req, res) => {
    try {
        var tree = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            imageURL:req.body.imageURL,
            itemTotal: req.body.price
        };

        Cart.addItem(tree);
        res.send({ response: "ADDED" })
    } catch (err) {
        res.status(400).send({ error: err });
    }
})

router.post('/removeItem', async (req, res) => {
    try {
        var treeId = req.body.id;
        console.log(treeId);

        Cart.removeItem(treeId);

        res.send({ response: "REMOVED" })
    } catch (err) {
        res.status(400).send({ error: err });
    }
})

module.exports = router;