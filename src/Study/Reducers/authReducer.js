// import {
//   AUTHENTICATED,  
// } from "../Constantes/action-type";
// import isEmpty from "lodash/isEmpty"
// export const REDIRECT = "REDIRECT";

// const initialState = {
//   authenticated: false,

//   Token: null,
// }



// // ====================== AUTHIFICATION ======================== //

// export const authReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case AUTHENTICATED:
//       return {
//         authenticated: !isEmpty(action.user),
//         user: action.user
//       };

//     default:
//       return state;
//   }
// }
// // ====================== ERROR  REGISTER ======================== //

// export const errorRegisterReducer = (state = initialState, action = {}) => {
//   switch (action.type) {

//     case "MessageErrorRegister":
//       return {
//         messageRegister: action.message
//       };

//     default:
//       return state;
//   }
// }

// // ====================== ERROR LOGIN ======================== //

// export const errorLoginReducer = (state = initialState, action = {}) => {
//   switch (action.type) {

//     case "MessageErrorLogin":
//       return {
//         messageLogin: action.message
//       };
//     default:
//       return state;
//   }
// }

// export const tokenReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case "TOKEN":
//       return { Token: action.Token };
//     default:
//       return state;
//   }
// };

// export default tokenReducer;