import mongoose from "mongoose";

export const connectDB= async (uri)=>{
    try {
        let conn=await mongoose.connect(uri);
        console.log(conn.connection.host);
    } catch (error) {
        process.exit(1);
    }
}