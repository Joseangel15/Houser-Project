import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Wizard_View1.css';

class Wizard_View1 extends Component {
    

    // handleCancel = () => {

    //     let confirmation = window.confirm('Are you sure you want to cancel this process?')

    //     if (confirmation){
    //         <Link to='/'></Link>
    //     }else if(!confirmation){
    //         return
    //     }
    // }


    render(){
        return(
            <div>

                <Navigation/>

                    <div className='mainDashDiv'>

                        <div className='hamster'>

                            <div className='titleAndCancelBtn'>

                                <h3 className='wizardTitle'>Add new listing</h3>

                                <Link to='/'><button className='cancelBtn' onClick={this.handleCancel}>Cancel</button></Link>

                            </div>

                            <div>

                                <h4>Step 1</h4>

                                <div className='dots'>

                                    <div 
                                    className='dot1'></div>
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