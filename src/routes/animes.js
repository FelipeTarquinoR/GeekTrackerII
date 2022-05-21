//Aniume managing routes

//Import block
const express = require('express')
const router = express.Router()

//Anime page routes execution
router.get('/anime', (req, res) => {
    res.send('Animes')
})

//export block
module.exports = router