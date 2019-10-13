const mongoose=require('./config/database')
const router=require('./config/routes')
const express=require('express')
const cors=require('cors')
const port= process.env.PORT ||3005
const app=express()
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, "client/build")))
app.use(express.json())
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})
app.use('/',router)

app.listen(port,function(){
    console.log('listening to port...',port)
})