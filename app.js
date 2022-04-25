const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv')
const homeRoutes = require('./routes/home')
const filmRoutes = require('./routes/films')
const authRoutes = require('./routes/auth')


dotenv.config({path: './config/config.env'})

// passport config
require('./config/passport')(passport)

connectDB()

// middleware
app.set('view-engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI,})
  }))
  

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/', homeRoutes)
app.use('/films',filmRoutes)
app.use('/auth',authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server running on server:${process.env.PORT}`)
})
