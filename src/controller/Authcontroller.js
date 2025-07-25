
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Adminmodel.js';
import { Doctor } from '../models/Docmodels.js';
import { Patient } from '../models/Patientmodel.js';
// import { Auth } from '../models/Authmodels.js';


const Log = async (req, res) => {
    let { name, Id, role } = req.body
    console.log("Received login request:", req.body);

    if (!name || !Id || !role) {
        return res.status(400).json({ message: "Fill all information" })
    }
    try {
        let user;
        if (role.toLowerCase() === "admin") {
            user = await Admin.findOne({ name, Id })
        }
        if (role.toLowerCase() === "doctor") {
            user = await Doctor.findOne({ name, Id })
        }
        if (role.toLowerCase() === "patient") {
            user = await Patient.findOne({ name, Id })
        }
        if (!user) {
            return res.status(400).json({ message: "User not found in database" })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.SECRET
        );
        // const addauth = new Auth({
        //     name,
        //     Id,
        //     role
        // })
        // await addauth.save()
        return res.status(200).json({
            token,
            role,
            user,
        });
    }
    catch (error) {
        console.log(error)
    }
}
export default Log;