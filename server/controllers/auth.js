import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const register = async (req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt);

    try{
        const newUser = new User({
            fullname : req.body.fullname,
            email : req.body.email,
            password: req.body.password,
            phone : req.body.phone
        });
        await newUser.save();
        res.status(201).send("User has been created");
    }catch(err){
        throw err;
    }
    
}


export const login = async (req,res,next)=>{
    
}