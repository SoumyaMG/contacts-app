import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'

const store=configureStore()

//for testing perpose 
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())


const jsx=(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
