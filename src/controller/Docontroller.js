import express from 'express'
import { Doctor } from '../models/Docmodels.js'


export const Doct = async (req, res) => {
    try {
        const { name, Id, role } = req.body
        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Doctor.findOne({ Id })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addDoctor = new Doctor({
            name,
            Id,
            role
        })
        await addDoctor.save()
        return res.status(200).json({ user: addDoctor })
    }
    catch (error) {
        console.log(error)
    }
}

export default Doct;