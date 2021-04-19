// import React from 'react';
// import { connect } from 'react-redux'
// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardGroup,
//     MDBCardImage,
//     MDBCardText,
//     MDBCardTitle,
//     MDBContainer,
//     MDBRating,
//     MDBCol
// } from 'mdbreact';
// import { ListeCours, getCoursById, getSearch } from "../../Actions/ApisActions"
// import { Redirect } from "react-router";
// import {withRouter} from 'react-router-dom';
// import Rating from '@material-ui/lab/Rating';

// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Skeleton from '@material-ui/lab/Skeleton';

// class SearchView extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             courId: null,
//             valueRating: 2,
//             loading: true,
//             resultat: []
//         }
//         this.lireCours = this.lireCours.bind(this);
//     }
//     // componentDidMount() {
//     //     this.props.getListeCours()
//     // }
//     lireCours = (courId) =>{
        
//         this.props.getCoursById(courId)
//         this.props.history.push('/apercuCours')
        
//     }

//     render() {
//         const visible = this.state
//         const MAX_LENGTH = 150;   
//         const { courId } = this.state
//         const {valueRating} = this.state
//         const search = localStorage.getItem("search")
//         return (
//             <MDBContainer>
//              {this.props.cours.length == 0 ?
//              <div className="w3-center" >
//                  <h2 style={{marginBottom:"250px", marginTop:"250px"}}>Aucun résultat pour {" [ "} {search} {" ] "} </h2>
//              </div>:
             
//                 <MDBCardGroup deck className='mt-3'>
//                     {
//                         this.props.cours.map(elemt => (
//                         <MDBCol md="4" className="">
//                             <MDBCard onClick={() => this.lireCours(elemt.id)} key={elemt.id} style={{cursor: "pointer"}}>
//                                 <MDBCardImage
//                                     src={elemt.categories.domaine.image.thumbnail_url}
//                                     alt='jungo'
//                                     top
//                                     hover
//                                     overlay='white-slight'
//                                 />
//                                         <MDBCardBody>
//                                             <h5>{elemt.category_name}</h5>
//                                             <MDBCardTitle tag='h5'><b>{elemt.title}</b></MDBCardTitle>
//                                             <MDBCardText>
//                                                 { elemt.short_description.length > MAX_LENGTH ?
//                                                     (
//                                                         <div>
//                                                             {`${elemt.short_description.substring(0, MAX_LENGTH)}...`}
//                                                         </div>
//                                                     )
//                                                     : elemt.short_description
//                                                  }
//                                             </MDBCardText>
//                                             <span className="w3-tex-grey"><i className=" fa fa-users w3-large"></i> Suivi par {elemt.asset.followers.length} personne(s)</span>
//                                             <Rating name="read-only" value={elemt.asset.cotations} readOnly />
//                                         </MDBCardBody>
//                               </MDBCard>
//                             </MDBCol>

//                         ))
//                     }

//                 </MDBCardGroup>
//           }
//             </MDBContainer>
//         );

//     }
// }
// function mapStateToProps(state) {
//     return {
//         cours: state.searchReducer.searchCours      
//     }
// }
// export default connect(mapStateToProps, {getSearch, getCoursById })(SearchView)