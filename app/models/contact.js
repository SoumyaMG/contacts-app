const mongoose=require('mongoose')
const validator=require('validator')

const Schema=mongoose.Schema

const contactSchema=new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String
    },
    category:{
        type:String
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator: function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return {notice:'Invalid email format'}
            }
        }
    },
    mobile:{
        type:Number,
        required:true
    },
    insta:{
        type:String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Contact=mongoose.model('Contact',contactSchema)

module.exports=Contact