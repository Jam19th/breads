// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// Index Route
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// Baker Show Route
baker.get('/:id', (req, res) => {
    const id = req.params.id
    Baker.findById(id)
        .populate({
            path: 'breads',
            options: { limit: 5}
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker,
            })
        })
})

// Delete Route
baker.delete('/:id', (req, res) => {
    const id = req.params.id
    Baker.findByIdAndDelete(id)
        .then(deletedBaker => {
            res.status(303).redirect('/breads')
        })
})

// Baker Seed Route
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// export
module.exports = baker                    