import mongoose from 'mongoose'

const Connect = async () => {
    try {
        const res = await mongoose.connect(process.env.URI)
        console.log("Connected")
    }
    catch (error) {
        console.log(error)
    }
}

export default Connect;