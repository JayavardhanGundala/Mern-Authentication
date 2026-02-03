import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

const app=express()
app.use(helmet())
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(process.env.mongoUri)
.then(()=>console.log("mongodb connected "))
.catch(()=>console.log("monodb not connected"))

app.get("/",(req,res)=>{
    res.json({msg:"hello from the server"})
})
app.listen(process.env.port,(req,res)=>{
    console.log(`server running ${process.env.port} `)
})