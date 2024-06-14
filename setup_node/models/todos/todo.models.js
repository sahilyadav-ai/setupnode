import mongoose, { mongo } from "mongoose"

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  comp:{
    type:Boolean,
    default:false,
  },
  createdBy:{
    // ye bi ak trf s type hai jo ref k liye use hota hai
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

  },
  subtodo:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubTodo"
  }]// array of sub todo 
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)  