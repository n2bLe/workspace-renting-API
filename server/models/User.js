const  mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: {
        type:String,
        required:true},

    email : {
        type:String,
        required:true},

    passowrd:{
        type:String,
        required:true},
        
    phone:{
        type:Number,
        required:true},
    
    isAdmin:{
        type:Boolean,
        default:false}
    
},
{timestamps:true})


export default mongoose.model("User",UserSchema);