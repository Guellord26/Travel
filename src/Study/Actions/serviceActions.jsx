import axios from 'axios'
import { getHotel, getFlight, getCars } from "./serviceDependant"
import { URL_ROOT_HOTEL, URL_ROOT_FLIGHT, URL_ROOT_CARS } from '../Constantes/action-type'


// ===================== HOTEL ===================== // 

export const HotelDispatch = (data) => dispatch => {
    // console.log(data)
    dispatch(getHotel(data))

}

export const VoirHotel = () => {

    return axios.get(URL_ROOT_HOTEL)

}
// ===================== Flight ===================== // 

export const FlightDispatch = (data) => dispatch => {
    // console.log(data)
    dispatch(getFlight(data))

}

export const VoirFlight = () => {

    return axios.get(URL_ROOT_FLIGHT)

}
// ===================== Flight ===================== // 

export const CarsDispatch = (data) => dispatch => {
    // console.log(data)
    dispatch(getCars(data))

}

export const VoirCars = () => {

    return axios.get(URL_ROOT_CARS)

}