import React from 'react';
import { Link, BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Register from './components/user/Register'
import Login from './components/user/Login'
import Account from './components/user/Account';

function App(props) {
  return (
    <BrowserRouter>
                {
                    !_.isEmpty(props.user) ?
                    (<div>
                        <li><Link to="/profile">Profile</Link> </li>
                        <li><link to="/events">Events</link></li>
                        <li><Link to="/logout">logout</Link></li>
                        </div>
                        ) : (
                            <div> 
                            <Link to="/register">register</Link> 
                            <Link to="/login">login</Link>
                            </div>
                        )
                }`
                <Route path="/register" component={Register} exact={true} />
				<Route path="/login" component={Login}/>
				<Route path="/account" component={Account}/>
   </BrowserRouter>
  )
}
const mapStateToProps = (state)=>{
	return{
		user: state.user
	}
}

export default connect(mapStateToProps)(App);
