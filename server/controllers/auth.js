import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt);

    try{
        const newUser = new User({
            fullname : req.body.fullname,
            email : req.body.email,
            password: hashedPassword,
            phone : req.body.phone
        });
        await newUser.save();
        res.status(201).send("User has been created");
    }catch(err){
        throw err;
    }
    
}


export const login = async (req,res,next)=>{
    try{
        const user = await User.findOne({'email':req.body.email})
        if(!user) return next();

        const isPasswordCorrect = bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect) return next();

        const token = jwt.sign(
            {id : user._id, isAdmin : user.isAdmin},
            process.env.JWT
        );
        const {password,isAdmin, ...otherDetails} = user._doc;
        
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).send({details : {...otherDetails, isAdmin}})
    }catch(err){
        throw err;
    }
    
}