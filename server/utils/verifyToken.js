import jwt from 'jsonwebtoken';



const secret = process.env.JWT;


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token){
        return next();
    }
    jwt.verify(token,secret,(err,info)=>{
        if(err) return next();
        req.user = info;
        next();
    })
}

export const verifyAdmin = (req,res,next)=>{

    const token = req.cookies.access_token;

    if(!token){
        return next();
    }

    jwt.verify(token,secret,(err,info)=>{
        if(err) return next();
        if(info.id === req.query.id || info.isAdmin){
            next();
        }
        else {
            res.send("You are not a user.");
        }
    })

}


export const verifyUser = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token){
        return next();
    }

    jwt.verify(token,secret,(err,info)=>{
        if(err) return next();
        if(info.isAdmin){
            next();
        }
        else {
            res.send("You are not an admin")
        }
    })
}