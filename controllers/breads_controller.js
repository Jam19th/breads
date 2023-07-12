const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

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

//Bread Route - show
breads.get('/:id', (req, res) => {
    const index = req.params.id;
    const hasBread = Bread[index];

    Bread.findById(index)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch((error) => {
            console.log('Whoops error', error);
            res.render('404')
        })
})

//Create Route
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
    Bread.create(req.body);
    res.redirect('/breads');
})


// EDIT Route
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                // bread: Bread[req.params.indexArray],
                // index: req.params.indexArray
                bread: foundBread
            })
        })
})

//Show Index route
breads.get('/:arrayIndex', (req, res) => {
    // const index = req.params.arrayIndex
    // const hasBread = Bread[index]

    // res.send(Bread) 
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    } else {
        res.render('404')
    }
})

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
    // Bread[req.params.arrayIndex] = req.body
    // res.redirect(`/breads/${req.params.arrayIndex}`)
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
})

// Bread Seed Route
breads.get('/data/seed', (req, res) => {
    Bread.insertMany([
            {
                name: 'Rye',
                // ingredients: ['flour', 'water', 'salt', 'yeast'],
                hasGluten: true,
                image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
                name: 'French',
                // ingredients: ['flour', 'water', 'salt', 'yeast'],
                hasGluten: true,
                image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            },
            {
                name: 'Gluten Free',
                // ingredients: ['flour', 'water', 'salt', 'yeast'],
                hasGluten: false,
                image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            },
            {
                name: 'Pumpernickel',
                // ingredients: ['flour', 'water', 'salt', 'yeast'],
                hasGluten: true,
                image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            }
        ])
        .then(createdBreads => {
            res.redirect('/breads')
        })
})

//show route
// breads.get('/:arrayIndex', (req, res) => {
//     const index = req.params.arrayIndex
//     res.send(Bread[index])
// })

module.exports = breads;