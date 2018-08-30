import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../Ducks/reducer';
import axios from 'axios';
import './Auth_View.css';

class Auth_View extends Component {
    constructor() {
        super()

        this.state = {

            username: '',
            password: '',
            user: {},
        };

        this.handleShowPass = this.handleShowPass.bind(this);
    }

    handleShowPass () {

        var x = document.getElementById('myInput');

        if (x.type === 'password') {
            x.type = 'text';
        }else {
            x.type = 'password';
        }
    }

    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
        console.log(this.state.username)
        console.log(this.state.password)
    }

    handleLogin = (res) => {

        const { username, password } = this.state

        if (!username || !password) {
            return alert('Please enter a Username and Password')
        }

        let body = {

            username,
            password,

        }

        axios.post(`/api/login`, body).then(res => {
            this.setState({
                user: res.data
            })

            this.props.history.push('/dashboard')
           
            console.log(res)
            
        }).catch( res => {alert('Invalid Password or Username. Please register your login information by writing a Username and Password followed by clicking on Register')})


    }

    handleRegister = () => {

        const { username, password } = this.state;

        if (!username || !password) {
            return alert('Please add a Username and Password')
        };

        let body = {

            username,
            password,

        }

        console.log(this.state.username)
        console.log(this.state.password)

        axios.post('/api/reg', body).then(res => {

        })

        alert('Your Username and Password have been registered')

        
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
                                onChange={(e) => this.handleChange('username', e.target.value)} />

                            <h4 className='userH4'>Password</h4>

                            <input
                                type="password"
                                className='loginInputs'
                                onChange={(e) => this.handleChange('password', e.target.value)} 
                                id='myInput'/>

                            <input type="checkbox" onClick={this.handleShowPass}/> Show Password

                        </div>

                        <div className='loginBtns'>

                            <button
                                className='loginBtn'
                                onClick={() => this.handleLogin()}>Login</button>

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

function mapStateToProps(state) {
    return {
        // user: state.user
    }
}


export default connect(mapStateToProps, { getUserData })(Auth_View);