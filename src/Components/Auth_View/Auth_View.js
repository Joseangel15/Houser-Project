import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Auth_View.css';

class Auth_View extends Component {


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

                            <input type="text" className='loginInputs'/>

                            <h4 className='userH4'>Password</h4>

                            <input type="text" className='loginInputs'/>

                        </div>

                        <div className='loginBtns'>

                            <button className='loginBtn'>Login</button>

                            <button className='regiBtn'>Register</button>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Auth_View;