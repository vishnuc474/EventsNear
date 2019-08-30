import axios from '../../config/axios'
export const startSetCategory = () => {
    return (dispatch) => {
        console.log('action -category')
        axios.get('/categories')
        .then((response) =>{
            console.log('response', response.data)
            dispatch(setCategory(response.data))
        })
    
    }
}


export const setCategory = (categories)=> {
    return{
        type: 'SET_CATEGORY',
        payload: categories
    }
}