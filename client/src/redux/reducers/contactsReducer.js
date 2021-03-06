const contactsReducer=(state=[],action)=>{
    switch(action.type)
    {
        case'LIST_CONTACTS':
            return [...action.payload]
        case 'ADD_CONTACT':
            return [...state,action.payload]
        case 'REMOVE_CONTACT':
            return state.filter((contact)=>{
                return contact._id!==action.payload
            })
        default:
            return [...state]
    }
}

export default contactsReducer