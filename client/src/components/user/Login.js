import React from 'react'
import axios from "../../config/axios"
import { startSetUser } from '../../redux/actions/user'
import {connect} from 'react-redux'
// import '../../login.css'

class UserLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            email: "",
            password: "",errorMsg:''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }


    //Dynamic Change
    handleChange(e) {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }


    handleReset(e) {
        this.setState(() => ({
            email: "",
            password: ""

        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }


        console.log('form data', formData)

        // axios.post('/user/login', formData)
        axios.post('/user/login', formData)
            .then((response)=> {
                 console.log(response.data)
                if(response.data.hasOwnProperty('errors')) {
                    this.setState({
                        errorMsg: response.data.errors
                    })
                } else{
                    console.log("response",response)
                    localStorage.setItem('userAuth', response.data.token) 
                    this.props.history.push('/account')
                }
            this.props.dispatch(startSetUser())
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="login-page">
            <h3>Login</h3>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <div className="form"><form onSubmit={this.handleSubmit}>
                        

                    <label>E mail
                    <input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label><br />

                    <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label><br />

                    <input type="submit" />

                    <button onClick={this.handleReset} >Reset</button>

                </form>
                </div>
            </div>


        )
    }
}

export default connect()(UserLogin)