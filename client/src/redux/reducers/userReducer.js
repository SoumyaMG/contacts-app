const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...action.payload }
        case 'REMOVE_USER':
            return {}
        default:
            return { ...state }  //reducers are pure function so it should aalways return new object or array
    }
}
export default userReducer