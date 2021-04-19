
import { connect } from 'react-redux'
import React, { Component, Suspense } from 'react';
import {
  MDBContainer, MDBRating,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBLink,
  MDBCard,
  MDBBtn,

} from 'mdbreact';
import img1 from "../../../assets/images/IATA-Accredited-Travel-Agent-Logo.jpg"

class Contact extends Component {

  render() {
     
    return (
      <div>
          
          <MDBContainer>
          <h1 className="w3-center w3-text-blue" style={{marginBottom:"50px"}}>Contact</h1>
              <MDBRow>
                  <MDBCol m="6">
                      <MDBRow>
                            <MDBCol m="8">
                                <div className="" style={{marginTop:"10px"}}>                    
                                  <div className="">                      
                                    <p><b>Tel 1: (+243) 854458920</b></p>
                                    <p><b>Tel 2: (+243) 826112658</b></p>
                                    <p><b>Mail 1 : info@jetdreamagency.com</b></p>
                                    <p><b>Mail 2 : contact@jetdreamagency.com</b></p>
                                    <p><b>Adresse : Numéro 97 Avenue Lufira, Commune de Lubumbashi, Lubumbashi, RDC</b></p>
                                  </div>
                                </div>
                            </MDBCol>
                            <MDBCol md="4">
                                <img className="w3-image" src={img1} alt="Fashion Blog" style={{marginTop:"50px", width: "100%" }} />              
                            </MDBCol>
                      </MDBRow>
                  </MDBCol>
                  <MDBCol m="6">
                  <form className="w3-container w3-light-grey w3-text-blue w3-margin">
                  
                  
                  <div class="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}></div>
                      <div className="w3-rest">
                        <input className="w3-input w3-border" name="first" type="text" placeholder="First Name"/>
                      </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}></div>
                      <div className="w3-rest">
                        <input className="w3-input w3-border" name="last" type="text" placeholder="Last Name"/>
                      </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}></div>
                      <div className="w3-rest">
                        <input className="w3-input w3-border" name="email" type="text" placeholder="Email"/>
                      </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}></div>
                      <div className="w3-rest">
                        <input className="w3-input w3-border" name="message" type="text" placeholder="Message"/>
                      </div>
                  </div>

                  <p className="w3-center">
                  <button className="btn w3-section w3-blue w3-ripple"> Envoyer </button>
                  </p>
                  </form>
                  </MDBCol>
                </MDBRow>  
          </MDBContainer>
      </div>
    )
  }
}

export default Contact