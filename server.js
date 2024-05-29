import express from "express"

const app = express()
app.use(express.json())


app.use("/",(req,res)=>{
    res.status(200).json({status:true,message:"test server running"})
})

app.listen(4000,()=>{
    console.log("connected");
})