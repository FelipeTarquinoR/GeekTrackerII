const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')

//Initializations
const app = express()
require('./database')

//Settings
app.set('port', process.env.PORT || 3000)//Express server port config
app.set('views', path.join(__dirname, 'views'))//Views folder node setting

const hbs = exphbs.create({//Creation of the hbs extention usage
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs"
})
app.engine(".hbs", hbs.engine)//Engine creation
app.set('view engine', ".hbs")//Engine setup

//Middlewares
app.use(express.urlencoded({extended: false}))//URL info recieving config
app.use(methodOverride('_method'))//PUT and DELETE method config
app.use(session({
    secret: 'geekSecret',
    resave: true,
    saveUninitialized: true
}))

//Global variables

//Routes
app.use(require('./routes/index'))//this is how the server knows this are
app.use(require('./routes/users'))
app.use(require('./routes/animes'))
app.use(require('./routes/games'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//server listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})