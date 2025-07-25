import express from 'express'
import Adm from '../controller/Admincontroller.js'

const Adminrouter = express.Router()

Adminrouter.post('/admin', Adm);

export default Adminrouter