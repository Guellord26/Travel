import Footer from "../Components/Menu/Footer/footer"
import Heder from './Menu/Heder'

import React, { Component, Suspense } from 'react';

import logoLoader from "../../assets/images/logo2.png"
import Routes from '../Routes'
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {

  render() {
     
    return (
      <>

        <Router>
 
          <Heder style={{ height: "30px" }} history={this.props.history}/>
          
          <div style={{ marginTop: "130px", marginBottom: "50px" }}>
          
            {/*
              <div style={{
               backgroundImage: `url(${jungoBackGround})`, backgroundRepeat: 'no-repeat', width: '100%', color: 'white'
             }}> */}

            <Suspense fallback={
              <div className='my-5 d-flex justify-content-around' style={{ marginTop: "100px", marginBottom: "250px" }}>
                <div className="w3-center" style={{ marginBottom: "180px" }} >
                  <img src={logoLoader} style={{ width: "40%", marginTop: "0px" }} />
                  <h4>Veuillez Patienter...</h4>
                  
                </div>
              </div>
            }>
              <Routes />
            </Suspense>
          </div>
          <div><Footer /></div>
        </Router>
      </>
    )
  }
}
// function mapStateToProps(state) {
//   return {        
//       messageAlert: state.alertMessageReducer.alertMessage
//   }
// }
export default App