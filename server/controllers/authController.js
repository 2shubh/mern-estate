import User from "../models/userModel.js";
import bcrypt from "bcrypt"


export const signup= async (req,res)=>{
 
    const {username,email,password} = req.body;

    const hashPassword=await bcrypt.hash(password,10);

    const newUser=new User({username,email,password:hashPassword});
    try{
       await newUser.save();
      res.status(201).json({
         message:"User created Successfully"
      })
    } 
    catch(err){
      res.status(500).json({
         message:err.message,
      })

    }
}