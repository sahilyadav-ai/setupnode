import mongoose from "mongoose"

const SubtodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  comp:{
    type:Boolean,
    default:false
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true});

export const SubTodo = mongoose.model("SubTodo",SubtodoSchema);