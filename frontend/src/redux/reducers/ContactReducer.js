import { GET_CONTACTS } from "../types/types"




const  initState={
    contacts:[],
    contact:null


}

function ContactReducer (state=initState,{type,payload}){
    switch (type){
        case GET_CONTACTS :
            return{
                ...state,contacts:payload,loading:false
            }
        default:
            return state
    }
}

export default ContactReducer