import React, { Component } from 'react';
import { connect } from 'react-redux'
// import banier from "../../../assets/w3images/london2.jpg"
import banier from "../../../assets/images/agence-voyage-1.png"

import { 
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingView from "./BookingView"

class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {        
        valueRating: 2,
        loading: true,
    }  
  }

  render() {
    
    return (
      <div className="Banniere" style={{ marginTop: "-60px" }} className="w3-white">
        {/* =============================== Header =============================== */}
        <header className="w3-display-container w3-wide w3-hide-small" id="home">
             <img className="w3-image w3-hide-small" src={banier} alt="Fashion Blog" style={{ width: "100%", height: "1060" }} />
             <div className="w3-display-middle" style={{width:"80%"}}>
                <MDBRow>
                  <MDBCol md="6"><BookingView /></MDBCol>
                  <MDBCol md="6"></MDBCol>
                </MDBRow>
             </div>      
        </header>
        <header className=" w3-wide w3-hide-large w3-hide-medium" id="home" style={{ marginTop: "-20px" }}>
             <img className="w3-image" src={banier} alt="Fashion Blog" style={{ width: "100%" }} />        
        </header>
        <MDBContainer>
        </MDBContainer>
      </div >
    );
  }
}

export default  Acceuil;

