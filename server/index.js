import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app=express();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected To Database!")
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is listening at port 3000..");
})