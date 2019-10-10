import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import contactsReducer from '../reducers/contactsReducer'
import contactReducer from '../reducers/contactReducer'
import userReducer from '../reducers/userReducer'

function configureStore(){
    const store=createStore(combineReducers({
        contacts:contactsReducer,
        contact:contactReducer,
        user:userReducer,
    }),applyMiddleware(thunk))

    return store
}

export default configureStore