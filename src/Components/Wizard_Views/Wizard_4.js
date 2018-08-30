import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage, updateRecommendedRent, updateState } from '../../Ducks/reducer';
import './Wizard_4.css';

class Wizard_4 extends Component {
    constructor(props){
        super(props)



        this.handleCancel = this.handleCancel.bind(this);
        this.handleRecommendedRent = this.handleRecommendedRent.bind(this);
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

    handleRecommendedRent (){
        const {updateRecommendedRent} = this.props;

        
    }

    render() {

            const {updateLoanAmount, updateMonthlyMortgage} = this.props;
            console.log(this.props.loanAmount)
            console.log(this.props.monthlyMortgage)

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

                            <input 
                                type="text"
                                onChange={(e) => updateLoanAmount(e.target.value)}
                                value={this.props.loanAmount}/>

                            <h4 className='mortH4'>Monthly Mortgage</h4>

                            <input 
                                type="text"
                                onChange={(e) => updateMonthlyMortgage(e.target.value)}
                                value={this.props.monthlyMortgage}/>

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

function mapStateToProps(state){
    const {loanAmount, monthlyMortgage, recommendedRent } = state;
    
    return {
        loanAmount,
        monthlyMortgage,
        recommendedRent
    }
}


export default connect(mapStateToProps, {updateLoanAmount, updateMonthlyMortgage, updateRecommendedRent, updateState})(Wizard_4);