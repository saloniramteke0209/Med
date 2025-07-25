import express from 'express'
import Log from '../controller/Authcontroller.js';


const Authrouter = express.Router();

Authrouter.post('/', Log);

export default Authrouter;