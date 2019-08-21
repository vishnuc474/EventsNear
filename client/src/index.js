import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/axios'
import App from './App'
import {Provider} from 'react-redux'
import {setUser} from './actions/user'
import configureStore from './store/configureStore';

const store = configureStore()

store.subscribe(() =>{
    console.log(store.getState())
})
if(localStorage.getItem('userAuth')){
    console.log('indexjs',localStorage.getItem('userAuth'))
    axios.get('/account', {
        headers: {
            'x-auth': localStorage.getItem('userAuth')
        }
    })
    .then(response => {
        store.dispatch(setUser(response.data))
    })
}
const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))