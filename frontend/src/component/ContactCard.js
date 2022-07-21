import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/actions/contactAction'
import EditeContact from './EditeContact'

function ContactCard({contact}) {


  const  dispatch=useDispatch()

const handleDelete=()=>{
if(window.confirm('Are you sure you want to delete this contact ?')){
  dispatch(deleteContact(contact._id))
}

};

  return (
    <div>
      <Card style={{margin:'30px', padding:'30px'}}>
  <Card.Header>Name : {contact.name}</Card.Header>
  <Card.Body>
    <Card.Title>Email : {contact.email} </Card.Title>
    <Card.Text>
      age : {contact.age}
    </Card.Text>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
    <EditeContact contact={contact}/>
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactCard