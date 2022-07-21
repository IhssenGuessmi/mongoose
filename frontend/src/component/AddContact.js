import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions/contactAction'
import { useNavigate } from 'react-router-dom'

function AddContact() {

  const navigate=useNavigate()

const [user,setUser]=useState({name:'',email:'',age:''})

const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}

const dispatch=useDispatch()

const handleAdd=(e)=>{
  e.preventDefault();
  dispatch(addContact(user))
  navigate('/contacts')
}

  return (
    <div style={{width:'40%' ,margin:'auto'}}>
        <Form>
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" name='email' onChange={handleChange} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter age" name='age' onChange={handleChange}/>
    </Form.Group>
    <Button variant="secondary" type="submit" onClick={handleAdd}>
      Add
    </Button>
  </Form>
  </div>
  )
}

export default AddContact