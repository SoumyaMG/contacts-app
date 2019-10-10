const contactReducer=(state={},action)=>{
    switch(action.type)
    {
        case'EDIT_CONTACTS':
            return {...state,...action.payload}
        default:
            return {...state}
    }
}

export default contactReducer