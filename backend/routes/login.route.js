import express from "express"
import { BlogUser } from "../models/user.model.js";

const router=express.Router();

router.get("/",async (req,res)=>{
    const {email,password}=req.body;

    console.log(req.headers['authorization'].split(" ")[1])

    //  emptiness checked at frontend....

    try {
        const user=await BlogUser.findOne({email});

        // console.log(user)

        if(!user){
            res.json({msg:"Invalid Email ID"})
        }

        let isPwdTrue=await user.isPasswordCorrect(password);

        if(!isPwdTrue){
            res.json({msg:"Invalid Password"})
        }
        const jsonToken=await user.generateToken();
    
        res.json({msg:"Success",payload:user,token:jsonToken})
    } 
    catch (error) {
        res.status(404).send(`Error ${error}`)
    }

})


export default router;