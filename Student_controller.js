import { studentModel } from "./Student_model.js";
import { StatusCodes } from "http-status-codes";

export async function Create(req,res){
    try{
        let s1=new studentModel(req.body);
        let x=await s1.save();
        res.status(StatusCodes.CREATED).json(x);
    }catch(error){
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function Update(req,res){
    try{
        await studentModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(StatusCodes.NO_CONTENT).json();
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function Find(req,res){
    try{
        const find=await studentModel.find();
        res.status(StatusCodes.OK).json(find);
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export async function Findbyid(req,res){
    try{
        const Find=await studentModel.findById(req.params.id);
        if(Find) res.status(StatusCodes.OK).json(Find);
        else res.status(StatusCodes.NOT_FOUND).json({error:"Invalid id"});
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export async function Delete(req,res){
    try{
        await studentModel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.OK).json();
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
