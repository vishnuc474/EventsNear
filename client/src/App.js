import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Register from './components/user/Register'
import Login from './components/user/Login'
import Account from './components/user/Account'
import Logout from './components/user/Logout';
import EventForm from './components/Events/Form'
import NavBar from './components/common/NavBar'
import _ from 'lodash'
import './App.css'


function App(props) {
  return (
	<BrowserRouter>
	        <NavBar/>
			
			<Route path="/user/register" component={Register} exact={true} />
			<Route path="/login" component={Login}/>
			<Route path="/account" component={Account}/>
			<Route path="/logout" component={Logout} />
			<Route path='/event/new' component={EventForm}/>
    </BrowserRouter> 
  )
		}
const mapStateToProps = (state)=>{
	return{
		user: state.user
	}
}

export default connect(mapStateToProps)(App);


// {
// 	!_.isEmpty(props.user) ?
// 	(<div>
// 		<ul>
// 			<li><Link to="/profile">Profile</Link> </li>
// 			<li><Link to="/events">Events</Link></li>
// 			<li><Link to="/logout">logout</Link></li>
// 		</ul>
// 	</div>
// 	) : (
// 			<div> 
// 					<Link to="/user/register">register</Link> 
// 					<Link to="/login">login</Link>
// 			</div>
// 		)
// }