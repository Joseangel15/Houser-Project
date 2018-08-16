import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Wizard_5.css';

class Wizard_5 extends Component {


    render() {

        const flex = {
            display: 'flex'
        }

        const borderIn = {
            border: '1px solid green'
        }


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

                            <input type="text"/>

                        </div>

                        <div className='lowerBtns'>

                            <Link to='/Wizard4'><button className='preSteBtn'>Previous Step</button></Link>

                            <Link to='/'><button className='completeBtn'>Complete</button></Link>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Wizard_5;