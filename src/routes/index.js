//Main app routes

//Import block
const express = require('express')
const router = express.Router()

//Main page route execution
router.get('/', (req, res) => {
    res.send('Index')
})

//export block
module.exports = router