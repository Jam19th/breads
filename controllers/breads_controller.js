const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');
const seedData = require('../models/seed.js')

//Index /breads Route
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            // console.log(foundBreads);
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page',
            })
        })
})

//New Route
breads.get('/new', (req, res) => {
    console.log('new route');
    res.render('New')
})

//Show Route
breads.get('/:id', (req, res) => {
    const id = req.params.id;
    Bread.findById(id)
        .then(foundBread => {
            const bakersName = foundBread.baker;
            Bread.findBakersOtherBreads(bakersName)
                .then((bakersOtherBreads) => {
                    console.log(bakersOtherBreads);
                    res.render('Show', {
                        bread: foundBread,
                        bakersOtherBreads
                    })
                })
        })
        .catch((error) => {
            console.log('Whoops error', error);
            res.render('404')
        })
})

// Create Route
breads.post('/', (req, res) => {
    // console.log(req.body);
    if (!req.body.image) {
        req.body.image = undefined;
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread.create(req.body)
        .then(() => {
            res.redirect('/breads');
        })
        .catch(error => {
            res.render('New', {
                error
            });
        });
});

//Delete Route
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => {
            // Bread.splice(req.params.indexArray, 1)
            res.status(303).redirect('/breads')
        });
})

// UPDATE Route
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    const id = req.params.id

    Bread.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${id}`)
        })
    // Bread[req.params.arrayIndex] = req.body
    // res.redirect(`/breads/${req.params.arrayIndex}`)
})

// EDIT Route
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                // bread: Bread[req.params.indexArray],
                // index: req.params.indexArray
                bread: foundBread,
            })
        })
})

// Seed Route
breads.get('/data/seed', (req, res) => {
    Bread.insertMany(seedData)
        .then(createdBreads => {
            res.redirect('/breads')
        })
})

breads.get('/data/updatefield', (req, res) => {
    Bread.updateMany({
        baker: { $exists: false }
    }, {
        baker: 'Rachel'
    })
        .then(() => {
            res.redirect('/breads')
        })
})

module.exports = breads;

//Show Index route
// breads.get('/:arrayIndex', (req, res) => {
// const index = req.params.arrayIndex
// const hasBread = Bread[index]

// res.send(Bread)
//     if (Bread[req.params.arrayIndex]) {
//         res.render('Show', {
//             bread: Bread[req.params.arrayIndex],
//             index: req.params.arrayIndex
//         })
//     } else {
//         res.render('404')
//     }
// })

//show route
// breads.get('/:arrayIndex', (req, res) => {
//     const index = req.params.arrayIndex
//     res.send(Bread[index])
// })
