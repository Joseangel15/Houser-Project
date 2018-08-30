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

            property: [],
            desRentFil: 0,
            filteredProps: [],
            mappedType: true,
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRentChange = this.handleRentChange.bind(this);
        this.handledFilteredProperties = this.handledFilteredProperties.bind(this);
    }

    
componentDidMount () {

    axios.get('/api/properties').then(res => {
        this.setState({
            property: res.data
        })
    })

    this.setState({
        desRentFil: 0
    })
    console.log(this.state.property)
}

handleDelete (id){

    axios.delete(`/api/properties/${id}`).then(res => {
        this.setState({

            property: res.data
        })
    })

    this.componentDidMount()
}

deleteConfirmation = ( id ) => {

    let confirmation = window.confirm('Are you sure you want to delete this Property?')

    if (confirmation){
       this.handleDelete(id)
    } else {
        return
    }
}

handleRentChange (e){
    let value = e.target.value;

    this.setState({

        desRentFil: value

    });
}

handledFilteredProperties () {

    axios.get(`/api/properties/${this.state.desRentFil}`).then(res => {
        this.setState({
            property: res.data
        })
    })

    
        
}

    render(){

        const properties = this.state.property.map(el => {
            return (
                <div className='mainBar2' key={el.id}>

                    <div className='housePic'>
                        <img src={el.image_url} alt="" className='houseImage'/>
                    </div>

                    <div className='nameAndDesc'>
                        <ul> 
                            <li className='propName2'>Name: {el.property_name} </li>
                            <li className='propDescrip'>{el.property_description} </li>
                        </ul>
                    </div>

                    <div className='else'>
                        <ul>
                            <li> Loan: ${el.loan_amount} </li>
                            <li> Monthly Mortgage: ${el.monthly_mortgage} </li>
                            <li> Recommended Rent: ${el.recommended_rent} </li>
                            <li> Desired Rent: ${el.desired_rent} </li>
                            <li> Address: {el.address} </li>
                            <li> City: {el.city} </li>
                        </ul>
                    </div>
                    <div>
                        <button 
                            className='deleteBtn'
                            onClick={() => this.deleteConfirmation(el.id)}>
                        </button>
                    </div>

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

                            <input 
                                type="number" 
                                className='filterInput'
                                placeholder= '0'
                                value={this.state.desRentFil}
                                onChange={(e) => this.handleRentChange(e)}/>

                            <button 
                                className='filterBtn'
                                onClick={this.handledFilteredProperties}
                                >
                                
                                Filter
                                
                            </button>

                            <button 
                                className='resetBtn'
                                onClick={this.componentDidMount}>Reset</button>
                            

                        </div>

                        <hr className='hrLine1'/>

                        <h5 className='homeLisTitle'>Home Listings</h5>

                        <div className='allBars'>

                            {properties}

                        </div>


                    </div>

                </div>

            </div>
        )
    }
}




export default Dashboard_View;


