
import {
 
  FETCH_HOTEL,
  FETCH_FLIGHT,
  FETCH_CARS

} from '../Constantes/action-type';


const initialeStateCars = {
  Cars: []
}
export const CarsReducer = (state = initialeStateCars, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, Cars: action.payload };
    default:
      return state;
  }
};
const initialeStateHotel = {
    Hotel: []
  }
  export const HotelReducer = (state = initialeStateHotel, action) => {
    switch (action.type) {
      case FETCH_HOTEL:
        return { ...state, Hotel: action.payload };
      default:
        return state;
    }
  };
  const initialeStateFlight = {
    Flight: []
  }
  export const FlightReducer = (state = initialeStateFlight, action) => {
    switch (action.type) {
      case FETCH_FLIGHT:
        return { ...state, Flight: action.payload };
      default:
        return state;
    }
  };

