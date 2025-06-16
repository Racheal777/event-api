import { User } from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//take the details, userName, email, password
//go and check our db to see if email is already there
//if we find that email, return the user and say login rather
//if we dont find it,
//we want to hash the password
//save the details with the hashed password
//create a token for you.

const generateOtp = (length = 6) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log("userdata", userName, email, password);
  const findUser = await User.findOne({ email });
  console.log("founduser", findUser);
  if (findUser) {
    return res.status(200).json({ message: "User already exist" });
  } else {
    const hashPassword = await bcrypt.hash(password, 12);
    console.log("hashpassword", hashPassword);

    const otp = generateOtp(4)
    const saveUserData = await User.create({
      userName,
      email,
      password: hashPassword,
      otp: otp,
      otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000)
    });

    //send email with the token using nodemailer

    const Secret = process.env.JWT_SECRET;
    console.log("sec", Secret);
    const token = jwt.sign({ id: saveUserData._id }, Secret, {
      expiresIn: "3m", // 1 minute
    });

    console.log("token", token);
    return res.status(201).json({ user: saveUserData, token: token });
  }



};





//create a function that verifies the otp
//update the user
//change the isVerified to true
//create a route for it
