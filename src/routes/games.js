//Game managing routes

//Import block
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const Game = require("../models/Games")
const Platform = require("../models/Platforms")

//Game routes execution
router.get('/juegos', async (req, res) => {
    const games = await Game.find().lean()//Consulting database for all games
    const platforms = await Platform.find().lean()//Consulting database for all platforms
    res.render('games/games', {games: games, platforms: platforms})//Rendering page and passing the arrays to the view
})

//Game adding route
router.post('/games/new-game', async (req, res) => {
    const {Title, Platform, Note} = req.body
    const newGame = new Game ({Title, Platform, Note})
    await newGame.save()
    res.redirect('/juegos')
})

//Game editing route
router.get('/games/edit')

//export block
module.exports = router