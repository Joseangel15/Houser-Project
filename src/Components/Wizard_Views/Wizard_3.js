import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImageUrl } from '../../Ducks/reducer';
import './Wizard_3.css';

class Wizard_3 extends Component {
    constructor(props){
        super(props)



        this.handleCancel = this.handleCancel.bind(this);
    }
    

    handleCancel  () {

        let confirmation = window.confirm('Are you sure you want to cancel this process?')
    
        if (confirmation){
                window.location.href = ('http://localhost:3000/#/dashboard')
            }else{
                return
            }
            
    }

    render() {

        const { updateImageUrl } = this.props;
        console.log(this.props.imageUrl)

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

                            <h4>Step 3</h4>

                            <div className='dots'>
                                <div className='dotF'></div >
                                <div className='dotF'></div >
                                <div className='dot1'></div >
                                <div className='dot'></div >
                                <div className='dot'></div >
                            </div>

                        </div>

                        <div className='propertyInfo'>

                            <div>
                                <div className='picPrev'>Preview</div>
                            </div>

                            <h4 className='imaUrl'>Image URL</h4>

                            <input 
                                type="text" 
                                onChange={(e) => updateImageUrl(e.target.value)}
                                value={this.props.imageUrl}/>

                        </div>

                        <div className='lowerBtns'>

                            <Link to='/Wizard2'><button className='preSteBtn'>Previous Step</button></Link>

                            <Link to='/Wizard4'><button className='nextSteBtn'>Next Step</button></Link>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    const { imageUrl } = state;

    return {
        imageUrl
    }
}


export default connect(mapStateToProps, {updateImageUrl})(Wizard_3);