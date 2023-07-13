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
    //this id is a reference to the baker collection
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker',
        // message: "{VALUE} is not a valid baker",
    }
})

//helper methods

//instance method
breadSchema.methods.getBakedBy = function () {
    // console.log(this);
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

//static method
breadSchema.statics.findBakersOtherBreads = function (bakersName) {
    return this.find({ baker: bakersName })
}

//bread model
const Bread = mongoose.model('Bread', breadSchema)

//export bread model
module.exports = Bread