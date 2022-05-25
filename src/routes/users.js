//User authentication routes

//Import block
const express = require('express')
const router = express.Router()

router.get('/usuarios/login', (req, res) => {
    res.render('users/login')
})

router.get('/usuarios/registro', (req, res) => {
    res.render('users/register')
})

//export block
module.exports = router