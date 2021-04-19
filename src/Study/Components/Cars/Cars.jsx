
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
import { VoirCars } from "../../Actions/serviceActions"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import LoadingIndicator from "../Loader/Loader"
import { trackPromise } from 'react-promise-tracker';

class Cars extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        iconInput: 'eye-slash',
        data: {        
            ville: null,
            dateDepart: new Date(),
            dateArrive: new Date(),
            Chambres: null,
            nbrAdult: null,
            nbrEnfant: null
        },
        modal2: false,
        submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = e => {
    e.preventDefault();
    
    const { data } = this.state
    
    if(data.Chambres && data.dateDepart && data.dateArrive && data.nbrAdult && data.nbrEnfant && data.ville)
    {
        this.setState({ submitted: true });
        const dataFormatedDateDepart = `${data.dateDepart.getFullYear()}-${data.dateDepart.getMonth()}-${data.dateDepart.getDay()}`
        const dataFormatedDateArrive = `${data.dateArrive.getFullYear()}-${data.dateArrive.getMonth()}-${data.dateArrive.getDay()}`
        const newObject = {...data, dateDepart: dataFormatedDateDepart, dateArrive: dataFormatedDateArrive}
        console.log(newObject)
         // ========== Send data ============//
    
            trackPromise(        
                VoirCars(newObject).then(
                    res => {
                    console.log(res.data)
                
                    // this.props.history.push('/readCours')               
                })
                .catch(error => {
                    console.log(error.response)
                })
            )
    }

   
}

handleChange = e => {
    e.preventDefault();
    const data = { [e.target.name]: e.target.value }
    const tmp = { ...this.state.data, ...data }
    this.setState({ data: { ...tmp } })       
};

  render() {
     
    return (
      <div>
          <h2>Voitures</h2>
      </div>
    )
  }
}

export default Cars