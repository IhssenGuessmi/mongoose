import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editeContact } from '../redux/actions/contactAction';

export default function EditeContact({contact}) {

    const [user, setUser]= useState({name:'',email:'',age:''})

    const dispatch=useDispatch()

    useEffect(() => {
        setUser({name:contact?.name,email:contact?.email,age:contact?.age})
    },[contact])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelechange = (e)=> {
      setUser({...user,[e.target.name]:e.target.value})
    }

    const handleEdite = ()=>{
    dispatch(editeContact(contact._id,user));
    handleClose()
    }

  return (
    <div>
         <Button variant="primary" onClick={()=>handleShow()}>
        Edite
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edite Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" name='email' value={user.email} onChange={handelechange} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" name='name' value={user.name} onChange={handelechange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter age" name='age' value={user.age} onChange={handelechange} />
    </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cansel
          </Button>
          <Button variant="primary" onClick={handleEdite}>Edite</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
