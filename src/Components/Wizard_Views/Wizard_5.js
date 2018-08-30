import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesiredRent, updatePropertyName, updateState } from '../../Ducks/reducer';
import axios from 'axios';
import './Wizard_5.css';

class Wizard_5 extends Component {
    constructor(props){
        super(props)

        this.state = {

            recommendedRent: this.props.monthlyMortgage * 1.25,

        }
        console.log(this.state.recommendedRent)

        

        this.handleSaveProperty = this.handleSaveProperty.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel  () {

        let confirmation = window.confirm('Are you sure you want to cancel this process?')
    
        if (confirmation){
            this.props.updateState()
            this.props.history.push('/dashboard')
            }else{
                return
            };


    }

    handleSaveProperty(){

        const { propertyName, propertyDescription, address, city, homeState, zip, imageUrl, loanAmount, monthlyMortgage, desiredRent, } = this.props; 

        const { recommendedRent } = this.state;


        let body = {

            
            property_name: propertyName,
            property_description: propertyDescription,
            address: address,
            city: city,
            state: homeState,
            zip: zip,
            image_url: imageUrl,
            loan_amount: loanAmount,
            monthly_mortgage: monthlyMortgage,
            desired_rent: desiredRent,
            recommended_rent: recommendedRent
        }

        
        axios.post('/api/properties', body).then(res => {

        }).catch(err => console.log(err));

        
        this.props.updateState()
        
        this.props.history.push('/dashboard')

    }


    render() {

        const {updateDesiredRent, updateState} = this.props;

        console.log(this.props.desiredRent)


        return (
            <div>
                <Navigation />
                <div className='mainDashDiv'>

                    <div className='hamster'>

                        <div className='titleAndCancelBtn'>

                            <h3 className='wizardTitle'>Add new listing</h3>

                            <button className='cancelBtn' onClick={this.handleCancel}>Cancel</button>

                        </div>

                        <div>

                            <h4>Step 5</h4>

                            <div className='dots'>
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dot1'></div >
                            </div>

                        </div>

                        <div className='propertyInfo'>

                            <h5 className='recRent' value={this.props.monthlyMortgage*1.25}>Recommended rent ${(this.props.monthlyMortgage*1.25)}</h5>

                            <h4 className='desRentH4'>Desired Rent</h4>

                            <input 
                                type="text"
                                onChange={(e) => updateDesiredRent(e.target.value)}
                                value={this.props.desiredRent}/>

                        </div>

                        <div className='lowerBtns'>

                            <Link to='/Wizard4'><button className='preSteBtn'>Previous Step</button></Link>

                            
                                <button 
                                    className='completeBtn'
                                    onClick={this.handleSaveProperty}
                                    >
                                    
                                    Complete
                                    
                                </button>
                            

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    const {desiredRent} = state;

    return {
        desiredRent,
        propertyName: state.propertyName,
        propertyDescription: state.propertyDescription,
        address: state.address,
        city: state.city,
        homeState: state.homeState,
        zip: state.zip,
        imageUrl: state.imageUrl,
        loanAmount: state.loanAmount,
        monthlyMortgage: state.monthlyMortgage,
    }
}



export default connect(mapStateToProps, {updateDesiredRent, updatePropertyName, updateState})(Wizard_5);