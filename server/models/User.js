import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: {
        type:String,
        required:true},

    email : {
        type:String,
        required:true},

    password:{
        type:String,
        required:true},
        
    phone:{
        type:Number,
        required:true},
    
    isAdmin:{
        type:Boolean,
        default:false}
    
},{writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }},
{timestamps:true})


export default mongoose.model("User",UserSchema);