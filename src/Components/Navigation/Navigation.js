import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import axios from 'axios';


class Navigation extends Component {

   handleLogout = () => {
        axios.post('/api/auth/logout').then(res => {
            res.data
        })
   }

   render(){

    return(
        <div className='mainBar'>

            <div className='navTitle'>

                <div className='houserLogo'>
                </div>

                <h2 className='houserTitle'>Houser</h2>
                <h2 className='dashboardTitle'>Dashboard</h2>
                
            </div>

                <div className='logOutLink'>

                    <Link to='/'><h5 
                        onClick={this.handleLogout}
                        className='logoutBtn'
                        >
                        
                        Logout
                        
                        </h5></Link>

                </div>

        </div>
    )
}
}

export default Navigation;

