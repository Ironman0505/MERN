import express from "express"
import { BlogUser } from "../models/user.model.js";

const router=express.Router();

router.get("/",async (req,res)=>{
    const {userName,email,password}=req.body;

    // frontend sees mandatory sending of all..

    try {
        const user=await BlogUser.create({
            userName,email,password
        })
         
        const jsonToken=await user.generateToken();


        res.json({msg:"Success",payload:user,token:jsonToken})

    } catch (error) {
        res.status(404).send(`Error ${error}`)
    }

    

})


export default router;