import express from "express";
import "dotenv/config";
import { configdb } from "./configdb.js";
import Studentrouter from "./Student_router.js";

const app=express();
app.use(express.json());
app.use(Studentrouter);
// app.use(Userrouter);
app.listen(process.env.PORT,(req,res)=>{
    configdb();
    console.log(`Server is running at port ${process.env.PORT}`);
})
