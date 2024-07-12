const express=require("express");
const app=express();
require("dotenv").config();
const port=3000;
app.use(express.json());
app.get("/",(req,res)=>{
    console.log("this is home route");
})
app.listen(port,()=>{
    console.log("running")
})