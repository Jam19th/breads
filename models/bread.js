// require mongoose 
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose

// bread schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    // ingredients: { type: String },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placekitten.com/g/200/300' },
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})

//bread model
const Bread = mongoose.model('Bread', breadSchema)

//export bread model
module.exports = Bread