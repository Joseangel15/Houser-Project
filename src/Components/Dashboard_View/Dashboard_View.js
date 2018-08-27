import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Dashboard_View.css';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {updateUserId} from '../../Ducks/reducer';


class Dashboard_View extends Component {
    constructor(props){
        super(props)

        this.state = {

            property: []
        }
    }

    
componentDidMount () {

    axios.get('/api/properties').then(res => {
        this.setState({
            property: res.data
        })
    })
    console.log(this.state.property)
}

    render(){

        const properties = this.state.property.map(el => {
            return (
                <div>
                    {el.property_name}
                </div>
            )
        })
        
        return(
            <div>
                <Navigation/>
            
                <div className='mainDashDiv'>

                    <div className='hamster'>

                        <Link to='/Wizard'>
                            <button 
                                className='addPropertyBtn'
                                >
                            
                            Add New Property
                            
                            </button>
                        </Link>

                        <div className='filter'>

                            <h5 className='listPropH5'>List properties with "desired" rent greater than: $</h5>

                            <input type="number" className='filterInput'/>

                            <button className='filterBtn'>Filter</button>

                            <button className='resetBtn'>Reset</button>
                            

                        </div>

                        <hr className='hrLine1'/>

                        <h5 className='homeLisTitle'>Home Listings</h5>

                        <div>
                            {properties}
                        </div>


                    </div>

                </div>

            </div>
        )
    }
}




export default Dashboard_View;


