const mongoose = require("mongoose")
const valitator = require("validator")
const studentSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {
            type: String,
            trim: true,
            lowercase: true,
            validator(value){
                if(!valitator.isEmail(value)){
                    throw new Error('Email is not valid!')
                }
            }
        }
        
    }
)
module.exports = mongoose.model("Student", studentSchema)