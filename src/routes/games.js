//Game managing routes

//Import block
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const Game = require("../models/Games")

//Game routes execution
router.get('/juegos', async (req, res) => {
    const games = await Game.find().lean()//Consulting database for all games
    res.render('games/games', {games: games})//Declaring and passing an array to the view
})

//Game Adding route
router.post('/games/new-game', async (req, res) => {
    const {Title, Platform, Note} = req.body
    const newGame = new Game ({Title, Platform, Note})
    await newGame.save()
    res.redirect('/juegos')
})

//export block
module.exports = router