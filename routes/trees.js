const express = require('express');
const router = express.Router();

// Trees model
const Trees = require('../models/trees');

// @route   GET /api/trees/
// @desc    Get all trees
// @access  Public
router.get('/', async (req, res) => {
  try {
    const trees = await Trees.find({});
    // res.json({ trees });
    console.log(trees);
    res.send({ trees });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/trees/:id
// @desc    Get a specific tree
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const tree = await Trees.findById(req.params.id);
    res.send({ tree });
  } catch (err) {
    res.status(404).send({ message: 'Tree not found!' });
  }
});

// @route   POST /api/trees/
// @desc    Create a tree
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newTree = await Trees.create({ 
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      conditionsOfPlace: req.body.conditionsOfPlace,
      maintanceRequirements: req.body.maintanceRequirements,
      maxHeight: req.body.maxHeight,
      growthRate: req.body.growthRate,
      imageURL: req.body.imageURL,
    });
     res.send({ newTree });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/trees/:id
// @desc    Update a tree
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedTree = await Trees.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'Tree was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/trees/:id
// @desc    Delete a tree
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeTree = await Trees.findByIdAndRemove(req.params.id);
     res.send({ message: 'Tree was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;