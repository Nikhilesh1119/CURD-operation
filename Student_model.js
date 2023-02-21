import mongoose from "mongoose";
const Studentschema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    department:{type:String,required:true}
});
export const studentModel=mongoose.model('students',Studentschema);