const mongoose=require('./config/database')
const router=require('./config/routes')
const express=require('express')
const cors=require('cors')
const port=3005
const app=express()

app.use(cors())
app.use(express.json())
app.use('/',router)

app.listen(port,function(){
    console.log('listening to port...',port)
})