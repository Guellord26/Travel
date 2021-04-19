
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
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import LoadingIndicator from "../Loader/Loader"
import { trackPromise } from 'react-promise-tracker';
import { VoirFlight } from "../../Actions/serviceActions"

class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconInput: 'eye-slash',
            data: {
               
                villeDepart: null,
                villeArrive: null,
                dateDepart: new Date(),
                dateArrive: new Date(),
                classe: null,
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
        if(data.classe && data.dateDepart && data.dateArrive && data.nbrAdult && data.nbrEnfant && data.villeArrive && data.villeDepart)
        {
            this.setState({ submitted: true });
            const dataFormatedDateDepart = `${data.dateDepart.getFullYear()}-${data.dateDepart.getMonth()}-${data.dateDepart.getDay()}`
            const dataFormatedDateArrive = `${data.dateArrive.getFullYear()}-${data.dateArrive.getMonth()}-${data.dateArrive.getDay()}`
            const newObject = {...data, dateDepart: dataFormatedDateDepart, dateArrive: dataFormatedDateArrive}
            console.log(newObject)
            
        // ========== Send data ============//
        
            trackPromise(        
                VoirFlight(newObject).then(
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
    mouseEnter = () => {
        this.setState({
            iconInput: 'eye',
            typeInput: 'text'
        });
    };

    mouseLeave = () => {
        this.setState({
            iconInput: 'eye-slash',
            typeInput: 'password'
        });
    };
    onLogout = (e) => {
        e.preventDefault()
        this.props.logoutAction()
    }
     ArrayAdult = [
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}
     ]
     ArrayEnfant = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4}
    ]
    ArrayClasse = [
        {id: "firstClass", value: "Premiere Classe"},
        {id: "businessClass", value: "Bussiness Classe"},
        {id: "ecoinomicClass", value: "Classe Economic"},
       
    ]

  render() {
    const { data, submitted } = this.state;
    return (
      <div>
             <div className="w3-container w3-text-black">
                <h2><i className="fa fa-plane w3-margin-right"></i>Vol</h2>
            </div>
            <div className="w3-container w3-white w3-padding-16">
            <form onSubmit={this.handleSubmit} noValidate>
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
                <div className="w3-half w3-margin-bottom">
                    <label><i className="fa fa-calendar-o"></i> From:</label>
                    <input className="w3-input w3-border"
                     type="text" placeholder="Lubumbashi"
                      name="villeDepart"
                      onChange={this.handleChange}
                       required/>
                    {submitted && !data.villeDepart &&
                        <div className="w3-text-red">Veillez remplire ce champ</div>
                    }
                </div>
                <div className="w3-half">
                    <label><i className="fa fa-calendar-o"></i> To:</label>
                    <input className="w3-input w3-border" type="text"  name="villeArrive" onChange={this.handleChange} placeholder="Kinshasa" required/>
                    {submitted && !data.villeArrive &&
                        <div className="w3-text-red">Veillez remplire ce champ</div>
                    }
                </div>
                </div>
                <div class="w3-row-padding" style={{margin:"0 -16px"}}>
                <div className="w3-half w3-margin-bottom">
                    <label><i className="fa fa-calendar-o"></i> Date de départ</label>
                    <DatePicker selected={data.dateDepart} className="w3-input w3-border"
                        dateFormat="yyyy-MM-dd"
                        onChange={date => this.setState({ data: { ...this.state.data, dateDepart: date } })} />
                    {submitted && !data.dateDepart &&
                        <div className="w3-text-red">Veillez remplire ce champ</div>
                    }
                </div>
                <div className="w3-half">
                    <label><i className="fa fa-calendar-o"></i> Date d'arrivé</label>
                    <DatePicker selected={data.dateArrive} className="w3-input w3-border"
                        dateFormat="yyyy-MM-dd"
                        onChange={date => this.setState({ data: { ...this.state.data, dateArrive: date } })} />
                    {submitted && !data.dateArrive &&
                        <div className="w3-text-red ">Veillez remplire ce champ</div>
                    }
                </div>
                </div>
                <div className="w3-row-padding" style={{margin:"8px -16px"}}>
                <div className="w3-half w3-margin-bottom">
                    <label><i className="fa fa-male"></i> Adults</label>
                    <select name='nbrAdult' onChange={this.handleChange} value={this.state.nbrAdult} className="browser-default custom-select">

                          {
                            this.ArrayAdult.map(items => (
                              <option key={items.id}
                                value={items.id}>
                                 {items.value}
                              </option>
                            ))
                          }

                        </select>
                        {submitted && !data.nbrAdult &&
                            <div className="w3-text-red">Veillez remplire ce champ</div>
                          }
                </div>
                <div className="w3-half">
                    <label><i className="fa fa-child"></i> Enfant</label>
                    <select name='nbrEnfant' onChange={this.handleChange} value={this.state.nbrEnfant} className="browser-default custom-select">

                    {
                        this.ArrayEnfant.map(items => (
                            <option key={items.id}
                                value={items.id}>
                                {items.value}
                            </option>
                        ))
                    }

                    </select>
                    { submitted && !data.nbrEnfant && <div className="w3-text-red">Veillez remplire ce champ</div> }
                </div>
                </div>
                <div className="">
                    <label><i className=""></i> Classe:</label>
                    <select name='classe' onChange={this.handleChange} value={this.state.classe} className="browser-default custom-select">

                    {
                        this.ArrayClasse.map(items => (
                            <option key={items.id}
                                value={items.id}>
                                {items.value}
                            </option>
                        ))
                    }

                    </select>
                    { submitted && !data.classe && <div className="w3-text-red">Veillez remplire ce champ</div> }
                </div><br/><br/>
                <button className="btn w3-text-white" type="submit" style={{backgroundColor:"#00001a"}}><i class="fa fa-search"></i> Recherche</button>
            </form>
            </div>
      </div>
    )
  }
}

export default Flight