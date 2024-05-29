import express from "express"

const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).json({status:true,message:"test server running"})
})

app.get("/test",(req,res)=>{
    res.status(200).json({status:true,message:"test route"})
})

app.get("/test2",(req,res)=>{
    res.status(200).json({status:true,message:"test route 2"})
})

app.listen(4000,()=>{
    console.log("connected");
})