const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

//index route
breads.get('/', (req, res) => {
    // res.send(Bread) 
    res.render('Index', {
        breads: Bread,
        title: 'Index Page',
        username: 'John Doe',
        asdf: 'jkl',
    })
})

//show route

breads.get('/:arrayIndex', (req, res) => {
    const index = req.params.arrayIndex
    res.send(Bread[index])
})

module.exports = breads;