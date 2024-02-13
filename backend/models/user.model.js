import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({
    userName:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
    }
},{
    timestamps:true
})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken=async function(){
   return jwt.sign(
        {
          userName:  this.userName, 
          id: this._id, 
          email: this.email
        },
        "APASHYAMKAPJSJIRHRIRO",
        
    )
}

export const BlogUser=mongoose.model("BlogUser",userSchema);