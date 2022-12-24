import User from '../models/User';

export const updateUser = async (req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.body.id,{ $set:req.body});
        res.status(204).send(updateUser);
    }catch(err){
        throw err;
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
        const user = await  User.findById(req.params.id);
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