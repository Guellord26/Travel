import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import {

    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,

} from 'mdbreact';
import { activeUser } from "../../Actions/AuthActions";

class AuthModal extends React.Component {

    state = {
        modal4: true,
    }
    toggle = nr => () => {
        const modalNumber = `modal${nr}`;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };
    ativerCompte = code => () => {
        console.log(code)
        const codeConf = {
            user: localStorage.getItem("userId"),
            code
        }
        this.props.activeUser(codeConf)
    }

    render() {
        const { modal4 } = this.state
        return (
            <div className="w3-container ">

                <MDBModal isOpen={modal4} toggle={this.toggle(4)} size='lg'>
                    <MDBModalHeader toggle={this.toggle(4)}>Merci pour votre inscription </MDBModalHeader>
                    <MDBModalBody>
                        Votre Code d'activation est le {this.props.code} appuyez sur confirmer pour activer
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='deep-orange' onClick={this.toggle(4), this.ativerCompte(this.props.code)}>Confimer</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        code: state.userCodeReducer.code,
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, { activeUser })(AuthModal);

