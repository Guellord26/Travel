import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import logoJungo from "../../../assets/js_logo/logo2.png";
import "./loader.css";

const LoadingIndicator = props => {
      const { promiseInProgress } = usePromiseTracker();
    
       return (
         promiseInProgress &&       
      <div>
        <div>
        <div className="contenant">         
          <div className="w3-center sk-folding-cube" style={{marginTop:"20%"}}>
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
          <h4 className="w3-center">Veuillez Patienter...</h4>
        </div>
        </div>      
      </div>
      );  
}
export default LoadingIndicator;