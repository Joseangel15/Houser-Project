import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Wizard_2.css';

class Wizard_2 extends Component {


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

                            <h4>Step 2</h4>

                            <div className='dots'>
                                <div className='dotF'></div >
                                <div className='dot1'></div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                            </div>

                        </div>

                        <div className='propertyInfo'>

                            <div >

                                <h4 className='h4Address'>Address</h4>

                                <input type="text" className='addressInp' style={borderIn}/>

                            </div>

                            <div className='cityAndState'>

                                <div className='cityDiv'>
                                    <h4 style={flex}>City</h4>

                                    <input type="text" style={borderIn}/>
                                </div>

                                <div>
                                    <h4 style={flex}>State</h4>

                                    <input type="text" style={borderIn}/>
                                </div>

                            </div>

                            <div>

                                <h4 style={flex}>Zip</h4>

                                <input type="text" className='zipInp' style={flex}/>

                            </div>

                            <div className='lowerBtns'>

                                <Link to='/Wizard'><button className='preSteBtn'>Previous Step</button></Link>

                                <Link to='/Wizard3'><button className='nextSteBtn'>Next Step</button></Link>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Wizard_2;