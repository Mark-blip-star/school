const express = require('express')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const { Sequelize } = require('sequelize');
// Роути
const homeRoutes = require('./routes/homeRoute.js')
const loginRouter = require('./routes/loginRoute.js')
const Router404 = require(`./middleweares/404.js`)

const fs = require('fs')

const app = express()


dotenv.config()
const PORT = process.env.PORT || 3000

app.set(`view engine`,`hbs`)
app.engine(`hbs`,hbs.engine({
    extname:"hbs",
    defaultLayout:"main",
    layoutsDir:__dirname+ "/views/layouts"
}))

app.use(express.static('public'))

app.use(homeRoutes)
app.use(loginRouter)
app.use(Router404)
async function start(){
    try{
        
        app.listen(PORT,() => {
            console.log(`The server is working on port :${PORT}`)
        })
    }catch(e){
        throw e 
    }
}

start()