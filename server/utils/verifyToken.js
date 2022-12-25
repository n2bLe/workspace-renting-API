import jwt from 'jsonwebtoken';



export const verifyUser = (req,res,next)=>{

    const token = req.cookies.access_token;

    if(!token){
        res.send("You are not authenticated.")
    }

    const data = jwt.verify(token,process.env.JWT);
    if(data.id === req.params.id || data.isAdmin){
        next();
    }
    else {
        res.send("You are not a user.");
    }

}


export const verifyAdmin = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token){
        res.send("You are not authenticated.")
    }

    const data = jwt.verify(token,process.env.JWT)

    if(data.isAdmin){
       next();
    }
    else {
        res.send("You are not an admin")
    }
}