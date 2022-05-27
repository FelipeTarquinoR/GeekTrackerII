//Game managing routes

//Import block
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

//Game Adding route
router.post('/games/new-game', (req, res) => {
    console.log(req.body);
})

//Game routes execution
router.get('/juegos', (req, res) => {
    res.render('games/games')
})

//export block
module.exports = router