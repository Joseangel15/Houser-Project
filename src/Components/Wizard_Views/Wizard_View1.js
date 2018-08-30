import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyName, updatePropertyDescription, updateState } from '../../Ducks/reducer';
import './Wizard_View1.css';

class Wizard_View1 extends Component {
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
            
            
            render(){
                
                const { updatePropertyName, updatePropertyDescription } = this.props;
                console.log(this.props.propertyName);
                console.log(this.props.propertyDescription)

                
                return(
                    <div>

                <Navigation/>

                    <div className='mainDashDiv'>

                        <div className='hamster'>

                            <div className='titleAndCancelBtn'>

                                <h3 className='wizardTitle'>Add new listing</h3>

                                <button className='cancelBtn' onClick={this.handleCancel}>Cancel</button>

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

                                <input 
                                    type="text" 
                                    className='propNameInp'
                                    onChange={(e) => updatePropertyName(e.target.value)}
                                    value={this.props.propertyName}/>
                                    
                                <h4 className='propDesc'>Property Description</h4>

                                <textarea 
                                    type="text" 
                                    className='propDescInp'
                                    onChange={(e) => updatePropertyDescription(e.target.value)}
                                    value={this.props.propertyDescription}/>

                                <Link to='/Wizard2'><button className='nextBtn'>Next Step</button></Link>

                            </div>

                        </div>

                    </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    const { propertyName, propertyDescription } = state;

    return {
        propertyName,
        propertyDescription
    };
}

export default connect(mapStateToProps, {updatePropertyName, updatePropertyDescription, updateState})(Wizard_View1);