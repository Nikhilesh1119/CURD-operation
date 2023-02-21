import express from "express";
import { Create,Update,Find,Findbyid,Delete } from "./Student_controller.js";

const Studentrouter=express.Router();

Studentrouter.get("/student",Find);
Studentrouter.get("/student/:id",Findbyid);
Studentrouter.post("/student",Create);
Studentrouter.put("/student/:id",Update);
Studentrouter.delete("/student/:id",Delete);

export default Studentrouter;