import React from 'react'
import {removeUser} from '../../redux/actions/user'
import {connect} from 'react-redux'
import _ from 'lodash'

function Logout(props){
    if(!_.isEmpty(props.user)){
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
    }   
     console.log('logout')   
    return (
        <div>
            <p> You have been logged out</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)