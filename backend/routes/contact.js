const express=require('express')
const { addContact, getContacts, deleteContact, updateContact, getOneContact } = require('../controllers/contactController')
const router=express.Router()


// ad new contact
// methode post 
// req.body
router.post('/addContact',addContact)
// get all contacts
// methode get 
router.get('/getContats',getContacts)
// remove contact
// methode  delete
// req.params
router.delete( '/deleteContact/:id', deleteContact)
// update contact
// methode put
// req.params
// req.body
router.put('/updateContact/:id' , updateContact)
// get one contact
// methode  get 
// req.params
router.get( '/getOneContact/:id', getOneContact) 


module.exports =router