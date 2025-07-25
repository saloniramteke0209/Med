import express from 'express'
import { Admin } from '../models/Adminmodel.js'

const Adm = async (req, res) => {
    try {
        const { name, Id, role } = req.body
        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Admin.findOne({ Id })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addAdmin = new Admin({
            name,
            Id,
            role
        })
        await addAdmin.save()
        return res.status(200).json({ user: addAdmin })
    }
    catch (error) {
        console.log(error)
    }
}

export default Adm;