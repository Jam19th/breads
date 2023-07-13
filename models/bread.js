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
        enum: {
            values: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
            message: "{VALUE} is not a valid baker"
        }
    }
})

//helper methods

//instance method
breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker}`
}

//static method
breadSchema.statics.findBakersOtherBreads = function (bakersName) {
    return this.find({ baker: bakersName })
}

//bread model
const Bread = mongoose.model('Bread', breadSchema)

//export bread model
module.exports = Bread