import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Dashboard_View.css';


class Dashboard_View extends Component {




    render(){

        
        return(
            <div>
                <Navigation/>
            
                <div className='mainDashDiv'>

                    <div className='hamster'>

                        <Link to='/Wizard'><button className='addPropertyBtn'>Add New Property</button></Link>

                        <div className='filter'>

                            <h5 className='listPropH5'>List properties with "desired" rent greater than: $</h5>

                            <input type="number" className='filterInput'/>

                            <button className='filterBtn'>Filter</button>

                            <button className='resetBtn'>Reset</button>
                            

                        </div>

                        <hr className='hrLine1'/>

                        <h5 className='homeLisTitle'>Home Listings</h5>

                        <div>
                            {/* These divs will be populated by mapping the results from the database.  */}
                        </div>


                    </div>

                </div>

            </div>
        )
    }
}


export default Dashboard_View;


