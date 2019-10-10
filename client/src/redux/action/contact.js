import axios from '../../config/axios'

export const startEditContact=(id,contact)=>{
    return (dispatch)=>{
        axios.put(`/contacts/${id}`,contact,{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then(()=>{
            dispatch(editContact(Response.data))
        })
    }
}

export const editContact=(data)=>{
    return {
        type:'EDIT_CONTACT',
        payload:data
    }
}