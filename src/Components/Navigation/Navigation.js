import React from 'react';
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

                    <h5>Logout</h5>

                </div>

        </div>
    )
}

export default Navigation;

