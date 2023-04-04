import express from "express"
import dotenv from "dotenv"

import test from "./controller/test.js"

dotenv.config()

const app=express()

app.get("/", test)

app.listen(process.env.PORT,()=>{
    console.log("App listening on port: " + process.env.PORT)
})

