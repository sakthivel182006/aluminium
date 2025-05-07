import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import DB12Connect from "./db12.js";


dotenv.config();

const app=express();
app.use(cors());
const port=process.env.PORT;
app.listen(port,(req,res)=>{
    console.log("server running on http://localhost:",port);
})
DB12Connect();
