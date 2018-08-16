import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Wizard_View1.css';

class Wizard_View1 extends Component {





    render(){
        return(
            <div>

                <Navigation/>

                    <div className='mainDashDiv'>

                        <div className='hamster'>

                            <div className='titleAndCancelBtn'>

                                <h3 className='wizardTitle'>Add new listing</h3>

                                <button className='cancelBtn'>Cancel</button>

                            </div>

                            <div>

                                <h4>Step 1</h4>

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

                            <div className='propertyInfo'>

                                <h4 className='propName'>Property Name</h4>

                                <input type="text" className='propNameInp'/>

                                <h4 className='propDesc'>Property Description</h4>

                                <textarea type="text" className='propDescInp'/>

                                <Link to='/Wizard2'><button className='nextBtn'>Next Step</button></Link>

                            </div>

                        </div>

                    </div>

            </div>
        )
    }
}

export default Wizard_View1;