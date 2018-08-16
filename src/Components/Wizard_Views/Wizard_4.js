import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Wizard_4.css';

class Wizard_4 extends Component {


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

                            <h4>Step 4</h4>

                            <div className='dots'>
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dot1'></div >
                                <div className='dot'></div >
                            </div>

                        </div>

                        <div className='propertyInfo'>

                            <h4 className='loanH4'>Loan Amount</h4>

                            <input type="text"/>

                            <h4 className='mortH4'>Monthly Mortgage</h4>

                            <input type="text"/>

                        </div>

                        <div className='lowerBtns'>

                            <Link to='/Wizard3'><button className='preSteBtn'>Previous Step</button></Link>

                            <Link to='/Wizard5'><button className='nextSteBtn'>Next Step</button></Link>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Wizard_4;