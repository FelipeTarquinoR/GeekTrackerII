//Game managing routes

//Import block
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

//Game Addind route
router.post('/games/new-game', (req, res) => {
    const {Title, Platform, Note} = req.body
    const errors = []
    if(!Title){
        errors.push({text: "Ingrese el título"})
    }
    if(!Platform){
        errors.push({text: "Seleccione una plataforma"})
    }
    if(!Note){
        errors.push({text: "Seleccione una plataforma"})
    }
    if(errors.length > 0){
        
    } else{
        res.send("ok")
    }
})

//Game routes execution
router.get('/juegos', (req, res) => {
    res.render('games/games')
})

//export block
module.exports = router