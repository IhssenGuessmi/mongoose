import axios from 'axios';
import {GET_CONTACTS} from '../types/types'


export const getContacts=()=>async(dispatch)=>{
  try {
    const res=await axios.get('/api/contacts/getContats');
   
    dispatch({type: GET_CONTACTS,payload:res.data.contacts})
  } catch (error) {
    console.log (error)
  }
};

export const addContact=(formData)=>async(dispatch)=>{
    try {
      await axios.post('/api/contacts/addContact',formData);
      dispatch(getContacts())
    } catch (error) {
      console.log (error)
    }
  }

  export const deleteContact=(id)=>async(dispatch)=>{
    try {
      await axios.delete(`/api/contacts/deleteContact/${id}`);
      dispatch(getContacts())
    } catch (error) {
      console.log (error)
    }
  }

  export const editeContact=(id,formData)=>async(dispatch)=>{
    console.log(formData)
    try {
      await axios.put(`/api/contacts/updateContact/${id}`,formData);
      dispatch(getContacts())
    } catch (error) {
      console.log (error)
    }
  }