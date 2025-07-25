import express from 'express'
import Doct from '../controller/Docontroller.js'

const Doctorrouter = express.Router()

Doctorrouter.post('/doc', Doct);

export default Doctorrouter;