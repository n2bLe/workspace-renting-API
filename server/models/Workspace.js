import mongoose from "mongoose";

const WorkspaceSchema = mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true},

    type:{
        type:[String],
        required:true},

    desc:{
        type:String,
        required:true},

    features :{
        type:[String]
    },

    access :{
        type:String,
        required:true
    },

    featured:{
        type:Boolean,
        required:true},

    unavailableDates :{
        type:[Date],
        required:true},

    photos:{
        type:[String]},

    price:{
         type:Number,
         required:true}

},{writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }},
{timestamps:true})

export default mongoose.model("Workspace",WorkspaceSchema);