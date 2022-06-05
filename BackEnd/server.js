const express = require("express");
const notes = require("./db")
const detenv = require("dotenv")
const App= express()


App.get("/",(req,res)=>{
    res.send("Api is created")
})
App.get("/api/note",(req,res)=>{
    res.json(notes)
})
detenv.config()
App.get("/api/note/:id",(req,res)=>{
    const note = notes.find((val,id,va)=>{
        if(val._id === req.params.id){
            return true
        }
        console.log(va);
    })
    res.send(note)
})
const PORT = process.env.PORT||8000
App.listen(PORT,console.log(`server is create successfully on port ${PORT}`))