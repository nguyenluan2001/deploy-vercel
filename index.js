const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/users",(req,res)=>{
    let users=[
        {
            "id":1,
            "username":"user 1"
        },
        {
            id:2,
            username:"user2"
        },
        {
            id:3,
            username:3
        }
    ]
    res.json(users)
})
const port = process.env.PORT || 5000
app.listen(port)