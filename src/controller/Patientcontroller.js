import express from 'express'
import { Patient } from '../models/Patientmodel.js'


export const Pati = async (req, res) => {
    try {
        const { name, Id, role } = req.body
        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Patient.findOne({ Id })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addPatient = new Patient({
            name,
            Id,
            role
        })
        await addPatient.save()
        return res.status(200).json({ user: addPatient })
    }
    catch (error) {
        console.log(error)
    }
}

export default Pati;