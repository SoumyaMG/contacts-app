const mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/contacts-app',{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('connection to db extablished successfully ..!!!')
})
.catch((err)=>{
    console.log('error in connecting to db..!!!')
})

module.exports=mongoose