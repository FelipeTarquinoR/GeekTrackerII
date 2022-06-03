//Database platform model

//Import block
const mongoose = require('mongoose')
const {Schema} = mongoose

//Schema creation
const PlatformSchema = new Schema({//Using capital letters since this is the whole schema and not just a variable
    Platform_name: {type: String, required: true}
})

//export block
module.exports = mongoose.model('Platform', PlatformSchema)