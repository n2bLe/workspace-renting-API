import User from '../models/User.js';

export const updateUser = async (req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.params.id,req.body);
        const updated = await User.findById(req.params.id);
        res.status(201).send(updated);
    }catch(err){
        next(err);
    }

}


export const deleteUser = async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(202).send("User has been deleted.")
    }catch(err){
        throw err;
    }
}


export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    }catch(err){
        throw err;
    }
}

export const getUsers = async(req,res,next)=> {
    try{
        const users = await User.find();
        res.status(200).send(users)
    }catch(err){

    }
}