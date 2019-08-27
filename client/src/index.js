import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import axios from './config/axios'
import {setUser} from './redux/actions/user'
import configureStore from './redux/store/configureStore'
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore()

store.subscribe(()=>{
    console.log('store', store.getState())
})
console.log('index')

if(localStorage.getItem('userAuth')){
    console.log('indexjs',localStorage.getItem('userAuth'))
    axios.get('user/account', {
        headers: {
            'x-auth': localStorage.getItem('userAuth')
        }
    })
    .then(response => {
        store.dispatch(setUser(response.data))
    })
}
const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))