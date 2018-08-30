import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateHomeState, updateZip, updateState } from '../../Ducks/reducer';
import './Wizard_2.css';

class Wizard_2 extends Component {
    constructor(props){
        super(props)



        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel  () {

        let confirmation = window.confirm('Are you sure you want to cancel this process?')
    
        if (confirmation){
            this.props.updateState()
            this.props.history.push('/dashboard')
            }else{
                return
            }
            
    }


    render() {

        const flex = {
            display: 'flex'
        }

        const borderIn = {
            border: '1px solid green'
        }

        const { updateAddress, updateCity, updateHomeState, updateZip } = this.props;
        console.log(this.props.address);
        console.log(this.props.city);
        console.log(this.props.homeState);
        console.log(this.props.zip);




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

                                <input 
                                    type="text" 
                                    className='addressInp' 
                                    style={borderIn}
                                    onChange={(e) => updateAddress(e.target.value)}
                                    value={this.props.address}/>

                            </div>

                            <div className='cityAndState'>

                                <div className='cityDiv'>
                                    <h4 style={flex}>City</h4>

                                    <input 
                                        type="text" 
                                        style={borderIn}
                                        onChange={(e) => updateCity(e.target.value)}
                                        value={this.props.city}/>
                                </div>

                                <div>
                                    <h4 style={flex}>State</h4>

                                    <input 
                                        type="text" 
                                        style={borderIn}
                                        onChange={(e) => updateHomeState(e.target.value)}
                                        value={this.props.homeState}/>
                                </div>

                            </div>

                            <div>

                                <h4 style={flex}>Zip</h4>

                                <input 
                                    type="text" 
                                    className='zipInp' 
                                    style={flex}
                                    onChange={(e) => updateZip(e.target.value)}
                                    value={this.props.zip}/>

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

function mapStateToProps(state){
    const  {address, city, homeState, zip} = state;

    return {

        address,
        city,
        homeState,
        zip

    }
}

export default connect(mapStateToProps, {updateAddress, updateCity, updateHomeState, updateZip, updateState})(Wizard_2);