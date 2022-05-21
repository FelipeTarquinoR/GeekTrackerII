//Game managing routes

//Import block
const express = require('express')
const router = express.Router()

//Game routes execution
router.get('/juegos', (req, res) => {
    res.send('Games')
})

//export block
module.exports = router