//Main app routes

//Import block
const express = require('express')
const router = express.Router()

//Main page route execution
router.get('/', (req, res) => {
    res.render('index')
})

//About page route execution
router.get('/about', (req, res) => {
    res.render('about')
})

//export block
module.exports = router