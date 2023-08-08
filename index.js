import express from 'express'
import dotenv from 'dotenv'
import routerHome from './routers/homeRouter.js'
import routerRagiser from './routers/registerRouter.js'
import routerLogin from './routers/loginRouter.js'
import dbConnect from './db/connection.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 6000
const dburl = process.env.DATBATASE_URL || 'mongodb://0.0.0.0:27017/'
const dbname = process.env.DATABASE_NAME || 'proj1'

// middleware for homePageRouter object
app.use('/', routerHome)

// middleware for routerRagiser object
app.use('/', routerRagiser)

// middleware for routerLogin object
app.use('/',  routerLogin)

// setup ejs template engine 
app.set('views', './views')
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))

//connection to  database
dbConnect(dburl, dbname)

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})