
import { connect } from 'react-redux'
import React, { Component} from 'react';
import * as emailjs from 'emailjs-com';
// import { AlertMessage } from "../../../Actions/ApisActions";
import { Button, toaster} from 'evergreen-ui'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToastSuccess, showToastError } from "../../Alerts/Alert"

import {
    MDBInput,
    MDBBtn,
    MDBModalFooter,
    MDBIcon,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
} from 'mdbreact';
// import Toaster from "../Alerts/toaster"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal4: false,
            data: {
                name: '',
                email: '',
                message: '',
            },
            reponse: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reponse = this.reponse.bind(this);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true });
        
        const { data } = this.state
        console.log(data)
       
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          };
          emailjs.send(            
            "service_f9n9qhd",
            "template_809s54o",
             templateParams,
            "user_JKy2mB2SSclklu4F5n4hY",         
          )
          .then(response=>{
            console.log('SUCCESS!', response.status, response.text);
            
            this.props.showToastSuccess()
            this.resetForm()
         }).catch(err =>{
            console.log('FAILED...', err);
            this.resetForm()
            // this.props.showToastError()
         });
        
    }
    reponse = () =>{
        this.setState({ reponse: true })
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: '',
        });
      }
    handleChange = e => {
        e.preventDefault();
        const data = { [e.target.name]: e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({ data: { ...tmp } })
        
    };

    toggle = nr => () => {
        const modalNumber = `modal${nr}`;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };
    
    render() {
        const { modal4, reponse } = this.state;
        
        return (
            <>
                
               <div className="w3-center">
               <MDBBtn  color='white' rounded onClick={this.toggle(4)}>
                    Nous contacter
                </MDBBtn>
               </div>
                <MDBModal isOpen={modal4} toggle={this.toggle(4)}>
                 <ToastContainer style={{width:"30%"}}/>

                    <MDBModalHeader
                        className='text-center w3-deep-orange'
                        titleClass='w-100 font-weight-bold'
                        toggle={this.toggle(4)}>

                        <h2 className="w3-text-white"><b>CONTACT</b></h2>
                    </MDBModalHeader>
                    <form onSubmit={this.handleSubmit}>
                    <MDBModalBody>
                        
                            <MDBInput
                                label='Votre Nom'
                                icon='user'
                                group
                                type='text'
                                name="name"
                                onChange={this.handleChange}
                                validate
                            />
                            <MDBInput
                                label='Mail'
                                name="email"
                                onChange={this.handleChange}
                                icon='envelope'
                                group
                                type='email'
                                validate
                                error='wrong'
                                success='right'
                            />
                            {/* <MDBInput label='Votre Sujet'
                                name="subjet"
                                onChange={this.handleChange}
                                icon='tag'
                                group
                                type='text'
                            /> */}
                            <MDBInput
                                type='textarea'
                                name="message"
                                onChange={this.handleChange}
                                rows='2'
                                label='Votre message'
                                icon='pencil'
                            />
                        
                    </MDBModalBody>
                    <MDBModalFooter className='justify-content-center'>
                        <MDBBtn  color='deep-orange' type="submit">
                            Envoyer
                            <MDBIcon icon='paper-plane' className='ml-2' />
                        </MDBBtn>
                       
                    </MDBModalFooter>
                    </form>
                </MDBModal>
            </>
        )
    }
}

export default connect(null, {
    // AlertMessage, 
    showToastSuccess, showToastError})(Contact)