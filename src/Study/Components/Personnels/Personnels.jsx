
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
import img1 from "../../../assets/images/African-Business-Team-Alliance.jpg"

class Personnels extends Component {

  render() {
     
    return (
      <div>
          
          <MDBContainer>
            <div className="w3-center w3-blue"><h1><b>NOTRE PERSONNEL</b> </h1></div>
              <MDBRow>
                 <MDBCol md="4">
                      <img className="w3-image" src={logoLoader} alt="Fashion Blog" style={{ width: "100%" }} />
                 </MDBCol>
                 <MDBCol md="8">
                 <h4 className="w3-text-blue" style={{marginTop:"40px"}}>
                     <b>
                     Faite confiance en une équipe des
                      professionnels pour des voyages inoubliables. JETDREAM TRAVEL
                      AGENCY and BUSINESS SOLUTION’S c’est une équipe
                      chevronnée dans le domaine du voyage. Nous travaillons avec
                      une équipe confiante très investit dans notre société. Grâce à
                      notre sérieux et nos diverses compétences, nous pouvons
                      garantir des services de haute qualité en terme des résultats,
                      d’hygiène et de sécurité. Nous vous souhaitons de bien vouloir
                      bénéficier de la qualité de service de notre personnel.
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

export default Personnels