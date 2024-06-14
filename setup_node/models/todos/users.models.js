import mongoose from 'mongoose';
// firstly import mongoose 

const userschema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    },
    email:{
      type:String,
      required:true,
      lowercase:true,
    },
    password:{
      type:String,
      required:[true,"password should be required"],
    }
},{timestamps:true});
// create a model schema and store a variable 

export const user = mongoose.model('User',userschema)
// export and make model('modelname,kis_base p banaya jai)