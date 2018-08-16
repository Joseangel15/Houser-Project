import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Wizard_2.css';

class Wizard_2 extends Component {


    render() {
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
                                <div className='dot'>
                                    <div className='innerDot'></div>
                                </div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                            </div>

                        </div>

                        <div>
                            <div>

                                <h4>Address</h4>

                                <input type="text"/>

                            </div>

                            <div>

                                <h4>City</h4>

                                <input type="text"/>

                                <h4>State</h4>

                                <input type="text"/>

                            </div>

                            <div>

                                <h4>Zip</h4>

                                <input type="text"/>

                            </div>

                            <div>

                                <button>Previous Step</button>

                                <button>Next Step</button>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


export default Wizard_2;