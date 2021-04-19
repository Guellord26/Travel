import { combineReducers } from 'redux'
// import redirectReducer, {
//     authReducer,  errorLoginReducer, errorRegisterReducer,
   
// } from './authReducer'

import {
    CarsReducer, HotelReducer, FlightReducer
} from './index'


export default combineReducers({
    CarsReducer, HotelReducer, FlightReducer

})