import React, { Component, useState } from 'react';
import {

  MDBFooter,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import Contact from "./contact"
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

const Footer = () => {

  return (
   
    <div className="">
      
        <MDBFooter  style={{ backgroundColor: '#333333' }} className='font-small pt-4 mt-4' >

         <div className="jungo-footer w3-padding-32">
          {/* <div className="w3-center head" style={{ marginBottom: "25px" }}>
            <span >Nous somme là pour vous aider</span>
          </div> */}

          <div className="w3-hide-small w3-row w3-white">
            <div className="w3-col m4  w3-center">
              {/* <h3 className="w3-text-white">JungoStudy </h3> */}
            </div>
            <div className="w3-col m4 ">
              {/* <Contact /> */}
            </div>
            <div className="w3-col m4  w3-center">
              <span className="w3-center w3-margin-right">
                <a href="https://www.facebook.com/JungoStudy/" target="_blank" style={{ fontSize: '35px', marginRight: "20px" }}><MDBIcon fab icon="facebook"></MDBIcon></a>
                <a href="https://www.instagram.com/jungo_study/" target="_blank" style={{ fontSize: '35px', marginRight: "20px" }}><MDBIcon fab icon="instagram"></MDBIcon></a>
                <a href="https://www.twitter.com/JungoStudy/" target="_blank" style={{ fontSize: '35px', marginRight: "20px" }}><MDBIcon fab icon="twitter"></MDBIcon></a>
                <a href="https:/api.whatsapp.com/send?phone=+243903191580/" target="_blank" style={{ fontSize: '35px' }}><MDBIcon fab icon="whatsapp"></MDBIcon></a>
              </span>
            </div>
          </div>
          <div className="w3-hide-medium w3-hide-large w3-row">
            <div className="w3-col m4  w3-center">

            </div>
            <div className="w3-col m4">
              <Contact />
            </div>
            <div className="w3-col m4  w3-center">
              <span className="w3-center w3-margin-right">
                <a href="https://www.facebook.com/JungoStudy/" target="_blank"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/jungo_study/" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://www.twitter.com/JungoStudy/" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https:/api.whatsapp.com/send?phone=+243903191580/" target="_blank"><i className="fa fa-whatsapp"></i></a>
              </span>
            </div>
          </div>

        </div>
        
        <p className='footer-copyright mb-0 py-3 text-center'>
          &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.jungostudy.com'> Jetdream <br /> </a>
        </p> 
       
      </MDBFooter>
    </div> 
  );

}
export default Footer;