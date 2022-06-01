//Database game model

//Import block
const mongoose = require('mongoose')
const {Schema} = mongoose

//Schema creation
const GameSchema = new Schema({//Using capital letters since this is the whole schema and not just a variable
    Title: {type: String, required: true},
    Platform: {type: String, required: true},
    Note: {type: Number, required: true},
    Date: {type: Date, default: Date.now}
})

//export block
module.exports = mongoose.model('Game', GameSchema)