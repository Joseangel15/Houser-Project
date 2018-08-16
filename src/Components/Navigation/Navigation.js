import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';


function Navigation () {

   

    return(
        <div className='mainBar'>

            <div className='navTitle'>

                <div className='houserLogo'>
                </div>

                <h2 className='houserTitle'>Houser</h2>
                <h2 className='dashboardTitle'>Dashboard</h2>
                
            </div>

                <div className='logOutLink'>

                    <Link to='/Login'><h5>Logout</h5></Link>

                </div>

        </div>
    )
}

export default Navigation;

