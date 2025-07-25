import express from 'express'
import Pati from '../controller/Patientcontroller.js';


const Patientrouter = express.Router()

Patientrouter.post('/pati', Pati);

export default Patientrouter;