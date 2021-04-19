import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import {

    MDBBtn,
    MDBModal,
    MDBModalBody,

} from 'mdbreact';
import { activeUser } from "../../Actions/AuthActions";
import SimpleRating from "./rating"

class RatingModal extends React.Component {

    state = {
        modal1: true,
        coursId: this.props.idCours
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
        const { modal1, coursId } = this.state
        console.log(coursId)
        return (
            <div className="w3-container ">

                <MDBModal isOpen={modal1} toggle={this.toggle(1)} frame position='top'>
                    <MDBModalBody className='text-center'>
                        <SimpleRating idCour={coursId}/>
                        <MDBBtn color='deep-orange' onClick={this.toggle(1)}>
                            Fermer
                        </MDBBtn>
                        
                    </MDBModalBody>
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

export default connect(mapStateToProps, { activeUser })(RatingModal);




