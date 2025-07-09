import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
dotenv.config();


const app=express();
app.use(express.json()); 

app.use('/api/user',userRouter);
app.use('/api/auth' ,authRouter);
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Connected To Database!")
})
.catch((err)=>{
    console.log(err);
    console.log("Erro in connecting DB")
})


app.listen(3000,()=>{
    console.log("Server is listening at port 3000..");
});
