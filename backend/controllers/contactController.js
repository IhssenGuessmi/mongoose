const Contact=require('../models/Contact')

exports.addContact=async(req,res)=>{
    const{name,email,age}=req.body
    try {
        // check if email if already used
        const found=await Contact.findOne({email})
        if(found){
            return res.status(400).send('email used')
        }
        const contact=new Contact({name,email,age})
        await contact.save()
        res.status(201).send({msg:'contact created',contact})
    } catch (error) {
        res.status(500).send('server error post')
    }
}


exports.getContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find()
            res.status(200).send({msg:'all contacts',contacts})
        
    } catch (error) {
        res.status(500).send('server error get')
    }
}


exports.deleteContact=async(req,res)=>{
    const  {id}=req.params
    try {
        await Contact.findByIdAndDelete(id)
        res.status(200).send('contact deleted...')
    } catch (error) {
        res.status(500).send('server error delete')
    }

}


exports.updateContact=async(req,res)=>{
    const {id}=req.params
    try {
        const updateContact = await Contact.findByIdAndUpdate(id,{$set:{...req.body}},{new:true});
        res.status(200).send({msg:'contact updated',updateContact})
    } catch (error) {
        res.status(500).send('server error update')
    }
}


exports.getOneContact=async(req,res)=>{
    const  {id}=req.params
    try {
        const contact= await Contact.findById(id)
        res.status(200).send(contact)
    } catch (error) {
        res.status(500).send('server error get one')
    }

}