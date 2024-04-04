import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
const app=express()



import router from "./route.js";

dotenv.config()
app.use(cors());
app.use(router);
mongoose.connect("mongodb+srv://mohantheboss1432:mohan01012005@cluster0.prkm0wp.mongodb.net/verified")
.then(()=>{
  console.log('Database connected successfully');
  
})
.catch(error=>{
  console.log(error);
  
})
app.get('/', (req, res)=>{
  res.send("Welcome")
})

app.listen(5001,()=>{
  console.log(`http://localhost:5001/`);
  console.log('Server running on port 5001');
  
})
