import {createStore, combineReducers, applyMiddleware} from 'redux'
import userRedcer from '../reducers/user'
import categoryReducer from '../reducers/user'
import eventReducer from '../reducers/event'
import thunk from 'redux-thunk'


const configureStore = () => {
    const state = createStore(combineReducers({
        user: userRedcer,
        categories: categoryReducer,
        events: eventReducer

    }),applyMiddleware(thunk))
    return state
}
export default configureStore