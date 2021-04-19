import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,   
    MDBLink
} from 'mdbreact';
import  { Redirect } from 'react-router-dom'
import logo from "../../../assets/images/logoNavbarre.png"
import { connect } from "react-redux"
import Search from "../Search/search"
import "./header.css"
import Cookies from 'js-cookie'
import './ModalExamplesPage.css'
import { Avatar } from 'evergreen-ui'

class Heder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseID: '',
            modal2: false
        }
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };
    // ======================== LogOut ==================== //
    onLogout = (e) => {
        e.preventDefault()
        this.props.logoutAction()
        // this.props.history.push.bind("/sign-in")
        
    }
    socialOnLogout = e => {
        e.preventDefault()
        this.props.logoutAction()
        // this.props.history.push.bind("/sign-in")
        // if (authFails)
        return <Redirect to='/sign-in'  />
    //   }
    }

    render() {
        const { modal2 } = this.state
        const { collapseID } = this.state;
        return (
            <div>
                <div className="w3-hide-small">
                <MDBNavbar color='white' style={{height:"70px"}} height='' dark expand='md' fixed='top' scrollingstyle={{ marginTop: '0px' }} >
                    <MDBNavbarBrand>           
                        <img src={logo} alt="" style={{ width: "240px"}} />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="w3-deep-orange"
                        onClick={this.toggleCollapse('navbarCollapse3')} />
                    <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                        <MDBNavbarNav right className='black-text' style={{marginTop:"30px"}}>
                          
                            <MDBNavItem active>
                                <MDBLink to="/" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{ marginTop: '0px', fontSize: "17px" }}>Accueil</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBLink to="/apropos" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{ marginTop: '0px', fontSize: "17px" }}>A propos de Nous</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/service" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Nos Services</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/personnels" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Notre Personnels</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/contact" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Contact</MDBLink>
                            </MDBNavItem>
                            
                        </MDBNavbarNav>
                       
                    </MDBCollapse>
                </MDBNavbar>
                </div>
                {/* Menu Mobile */}
               <div className="w3-hide-large w3-hide-medium">
               <MDBNavbar className="" color='white' dark expand='md' fixed='top' scrollingstyle={{ marginTop: '20px' }} >
                    <MDBNavbarBrand>
                        <img src={logo} alt="" style={{ width: "240px" }} />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="w3-blue"
                        onClick={this.toggleCollapse('navbarCollapse3')} />                    
                    <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                        <MDBNavbarNav left className='black-text' >
                            
                            <MDBNavItem active>
                                <MDBLink to="/" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{ marginTop: '0px', fontSize: "17px" }}>Accueil</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBLink to="/apropos" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{ marginTop: '0px', fontSize: "17px" }}>A propos de Nous</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/service" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Nos Services</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/personnels" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Notre Personnels</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink to="/contact" className="w3-hover-white black-text w3-hover-text-deep-orange" style={{marginTop: '0px', fontSize: "17px" }}>Contact</MDBLink>
                            </MDBNavItem>
                            
                        </MDBNavbarNav>
                       
                    </MDBCollapse>
                </MDBNavbar>
               </div>
            </div >
       
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         // socialUser: state.socialAuthReducer,
        
//     }
// };
// export default connect(mapStateToProps, {})(Heder);
export default Heder;
