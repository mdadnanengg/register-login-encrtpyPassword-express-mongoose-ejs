import express from 'express'
import bodyParser from 'body-parser'
import { registerPage, registerUser } from '../controllers/registerController.js'

const routerRagiser = express.Router()

routerRagiser.use(bodyParser.urlencoded({ extended: true }))

routerRagiser.get('/register', registerPage)

routerRagiser.post('/register', registerUser)

export default routerRagiser
