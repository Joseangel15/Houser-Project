import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth_View.css';

class Auth_View extends Component {
    constructor(){
        super()

        this.state = {

            username: '',
            password: '',
        };
    }

    handleChange = (prop, val) => {
        this.setState({ 
            [prop]: val 
        })
        console.log(this.state.username)
        console.log(this.state.password)
    }

    // handleLogin = () => {
    //     axios.get(`/api/login/${this.state.username}`).then(res => {
    //         this.setState({
    //             username: res.data
    //         })
    //     })
    // }

    handleRegister = () => {

        const { username, password } = this.state;
        
        if(!username || !password) {
            return alert('Please add a Username and Password')
        };

        this.setState({
            username: '',
            password: '',
        })

        let body ={

            username: username,
            password: password,

        }

        axios.post('/api/register', body).then( res => {

            alert('Username and Password have been registered')
        })
    }


    render() {


        return (
            <div>
                <div className='mainDashDiv'>

                    <div className='hamster'>

                        <div className='logoParent'>

                            <div className='mainLogo'></div>

                        </div>

                        <div className='userAndPassDiv'>

                            <h4 className='userH4'>Username</h4>

                            <input 
                                type="text" 
                                className='loginInputs'
                                onChange={(e) => this.handleChange('username', e.target.value)}/>

                            <h4 className='userH4'>Password</h4>

                            <input 
                                type="text" 
                                className='loginInputs'
                                onChange={(e) => this.handleChange('password', e.target.value)}/>

                        </div>

                        <div className='loginBtns'>

                            <button className='loginBtn'>Login</button>

                            <button 
                                className='regiBtn'
                                onClick={() => this.handleRegister()}>Register</button>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Auth_View;