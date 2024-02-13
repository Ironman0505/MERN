import jwt from "jsonwebtoken";



export const verifyToken=(req,res,next)=>{

    
   const token= req.headers?.authorization?.split(' ')[1];

   if(!token){
    res.send("UnAuthorized Req..")
   }

   try {
    jwt.verify(token,"APASHYAMKAPJSJIRHRIRO");
    next();
   } catch (error) {
    res.send(`UnAuthorized Req.. ${error}`)
   }
   
  
}