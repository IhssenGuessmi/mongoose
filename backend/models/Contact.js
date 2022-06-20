const mongoose=require('mongoose')
const Schema=mongoose.Schema

const contactSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:Number
})
module.exports=mongoose.model('Contact',contactSchema)
