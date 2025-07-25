import User from "../models/userModel.js";
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { erroHandler } from "../utils/error.js";
dotenv.config();


export const signup= async (req,res,next)=>{
 
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
      next(err);
      }

    }

    export const signin=async (req,res,next)=>{
      const {email,password}=req.body;
      try{
        const validUser=await User.findOne({email});
        if(!validUser) return next(erroHandler(404, 'User not found'));

        const validPassword=bcrypt.compareSync(password,validUser.password);
        if(!validPassword) return next(erroHandler(401, " Wrong Credentials"));

        const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:pass, ...rest}=validUser._doc;
        res
        .cookie('access_token' , token ,{httpOnly:true})
        .status(200)
        .json(rest)

      }
      catch(err){
         next(err);
      }
    }

    export const google=async(req,res,next)=>{
      try{
        const user=await User.findOne({email:req.body.email})
        if(user){
          const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
          const {password: pass, ...rest}=user._doc;
          res
          .cookie('access_token' , token , {httpOnly:true} )
          .status(200)
          .json(rest);
        }
        else{
          
          const generatedPassword=Math.random().toString(36).slice(-8);
          const hashedPassword=bcrypt.hashSync(generatedPassword,10);
          const newUser=new User({
            username:req.body.name.split(" ").join("").toLowerCase()
             + Math.random().toString(36).slice(-8),
             email:req.body.email,
             password:hashedPassword,avatar:req.body.photo});

             await newUser.save();
              
        }
      
      }
      catch(error){
        next(error);
      }
    }
