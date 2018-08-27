import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesiredRent } from '../../Ducks/reducer';
import axios from 'axios';
import './Wizard_5.css';

class Wizard_5 extends Component {

    handleSaveProperty(){

        const {} = this.state; 

        
        axios.post('/api/properties').then(res => {

        })

    }


    render() {

        const {updateDesiredRent} = this.props;
        console.log(this.props.desiredRent)


        return (
            <div>
                <Navigation />
                <div className='mainDashDiv'>

                    <div className='hamster'>

                        <div className='titleAndCancelBtn'>

                            <h3 className='wizardTitle'>Add new listing</h3>

                            <button className='cancelBtn'>Cancel</button>

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

                            <h5 className='recRent'>Recommended rent ______</h5>

                            <h4 className='desRentH4'>Desired Rent</h4>

                            <input 
                                type="text"
                                onChange={(e) => updateDesiredRent(e.target.value)}
                                value={this.props.desiredRent}/>

                        </div>

                        <div className='lowerBtns'>

                            <Link to='/Wizard4'><button className='preSteBtn'>Previous Step</button></Link>

                            <Link to='/Dashboard'>
                                <button 
                                    className='completeBtn'
                                    onClick={this.handleSaveProperty}>
                                    
                                    Complete
                                    
                                </button>
                            </Link>

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
        desiredRent
    }
}


export default connect(mapStateToProps, {updateDesiredRent})(Wizard_5);