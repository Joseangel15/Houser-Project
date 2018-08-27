
const initialState = {

    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    homeState: '',
    zip: '',
    imageUrl: '',
    loanAmount: '',
    monthlyMortgage: '',
    desiredRent: '',
    user: {}
    


}

//Action Types
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_PROPERTY_DESCRIPTION = "UPDATE_PROPERTY_DESCRIPTION";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_HOME_STATE = "UPDATE_HOME_STATE"
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";

const USER_DATA = "USER_DATA";


//Reducer Function
function reducer( state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, { propertyName: action.payload });

        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state, { propertyDescription: action.payload });

        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });

        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });

        case UPDATE_HOME_STATE:
            return Object.assign({}, state, { homeState: action.payload });

        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });

        case UPDATE_IMAGEURL:
            return Object.assign({}, state, { imageUrl: action.payload });

        case UPDATE_LOAN_AMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload });

        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload });

        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: action.payload });

        case USER_DATA:
            return Object.assign({}, state, {user: action.payload});

        default: return state;
    }
}


//Action creators
export function updatePropertyName( propertyName ){
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}

export function updatePropertyDescription( propertyDescription ){
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}

export function updateAddress( address ){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity( city ) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateHomeState( homeState ){
    return {
        type: UPDATE_HOME_STATE,
        payload: homeState
    }
}

export function updateZip( zip ){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImageUrl( imageUrl ) {
    return {
        type: UPDATE_IMAGEURL,
        payload: imageUrl
    }
}

export function updateLoanAmount( loanAmount ){
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}

export function updateMonthlyMortgage( monthlyMortgage ){
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function updateDesiredRent( desiredRent ){
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function getUserData(user) {
    return{
        type: USER_DATA,
        payload: user
    }
}

export default reducer;