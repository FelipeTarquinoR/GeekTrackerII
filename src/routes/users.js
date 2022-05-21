//User authentication routes

//Import block
const express = require('express')
const router = express.Router()

router.get('/usuarios/login', (req, res) => {
    res.send('Ingreso')
})

router.get('/usuarios/registro', (req, res) => {
    res.send('Registro')
})

//export block
module.exports = router