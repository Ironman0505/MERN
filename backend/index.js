import express from "express";
import { connectDB } from "./db/connectDB.js";
import { verifyToken } from "./middlewares/verifyToken.js";



const app = express();
const port = 3333


app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.get('/', (req, res) =>{
    res.send('Hello World!')
})


import LoginRouter from "./routes/login.route.js"
import SignUpRouter from "./routes/signup.route.js"


app.use("/login",LoginRouter);
app.use("/signup",SignUpRouter);

app.get("/safe",verifyToken,(req,res)=>{
    res.send("Hey Auth Person...")
})





const mongoUri="mongodb+srv://kowshikreddymendu:kowshikreddymendu@cluster0.yq2vmv6.mongodb.net/BlogXDB";

connectDB(mongoUri)
.then(()=>{
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
.catch(er=>console.log("Mongo Connection Err",er));
