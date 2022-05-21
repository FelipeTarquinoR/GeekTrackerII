//Import block
const mongoose = require('mongoose')

//Database config
mongoose.connect('mongodb://127.0.0.1:27017/geek-trackerII-db', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))//If db connects, message is showed
    .catch(err => console.error(err))//If db does not connects, message is not showed