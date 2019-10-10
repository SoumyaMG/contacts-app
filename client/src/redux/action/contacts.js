import axios from '../../config/axios'

export const startListContacts=()=>{
    return (dispatch)=>{
        axios.get('/contacts',{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then((response)=>{
            dispatch(listContacts(response.data))
        })
    }
}

export const listContacts=(contacts)=>{
    return {
        type:'LIST_CONTACTS',
        payload:contacts
    }
}


export const startAddContact=(contact)=>{
    return (dispatch)=>{
        axios.post('/contacts',contact,{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then((response)=>{
            dispatch(addContact(response.data))
        })
    }
}

export const addContact=(contact)=>{
    return {
        type:'ADD_CONTACT',
        payload:contact
    }
}


export const startRemoveContact=(id)=>{
    return (dispatch)=>{
        axios.delete(`/contacts/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then(()=>{
            dispatch(removeContact(id))
        })
    }
}

export const removeContact=(id)=>{
    return {
        type:'REMOVE_CONTACT',
        payload:id
    }
}
