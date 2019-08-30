import axios from '../../config/axios'
export const startSetEvent = () => {
    return (dispatch) => {
        console.log('action -events')
        axios.get('/events')
        .then((response) =>{
            console.log('response', response.data)
            dispatch(setEvent(response.data))
        })
    
    }
}


export const setEvent = (events)=> {
    console.log('')
    return{
        type: 'SET_EVENT',
        payload: events
    }
}