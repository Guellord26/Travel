
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
import logoLoader from "../../../assets/images/logo2.png"
import img1 from "../../../assets/images/agence-voyage-1.png"

class Apropos extends Component {

  render() {
     
    return (
      <div>
          
          <MDBContainer>
            <div className="w3-center w3-blue"><h1><b>APROPS DE NOUS</b> </h1></div>
              <MDBRow>
                 <MDBCol md="4">
                      <img className="w3-image" src={logoLoader} alt="Fashion Blog" style={{ width: "100%" }} />
                 </MDBCol>
                 <MDBCol md="8">
                 <h4 className="w3-text-blue" style={{marginTop:"40px"}}>
                     <b>
                     JETDREAM TRAVEL AGENCY and BUSINESS SOLUTION’S est
                           une agence de voyage et d’affaires œuvrant en République Démocratique du
                           Congo, filiale du Groupe JETDREAM en République Sud-Africaine, notre siège
                           social est situé dans la capitale du cuivre et nous offrons plusieurs solutions de
                           voyage et de business à notre clientèle, cela fait de nous un partenaire
                           incontournable pour nos différents clients dans le domaine du voyage et des
                           affaires. Nous sommes une jeune entreprise bâtit sur des valeurs riches et notre
                           professionnalisme nous permet de satisfaire notre clientèle dans ses désirs.
                     </b>
                 </h4>
                 </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                     <img className="w3-image" src={img1} alt="Fashion Blog" style={{ width: "100%" }} />
                </MDBCol>
              </MDBRow>
          </MDBContainer>
         
      </div>
    )
  }
}

export default Apropos