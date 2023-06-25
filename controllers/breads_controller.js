const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

//index route
breads.get('/:arrayIndex', (req, res) => {
    // res.send(Bread) 
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
})

//show route
breads.get('/:arrayIndex', (req, res) => {
    const index = req.params.arrayIndex
    res.send(Bread[index])
})

module.exports = breads;