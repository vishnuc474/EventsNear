import axios from '../config/axios'
export const startSetUser = () => {
    return (dispatch) => {
        console.log('action -user')
        axios.get('/user/account', {
            headers:{
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then((response) =>{
            console.log('response', response.data)
            dispatch(setUser(response.data))
        })
    }
}


export const setUser = (user)=> {
    console.log('')
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = () => {
    return{
        type:"REMOVE_USER"
    }
}