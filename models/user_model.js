import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String
    },

    email:{
        type: String,
        unique:true
    },

    password:{
        type:String,

    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp:{
        type: String,

    },

    otpExpiresAt: {
    type: Date
  }
}, {timestamps:true})

export const User = model('User', userSchema)