// import React, { useState }  from 'react';
// import { connect } from 'react-redux'
// import {
//     MDBIcon
// } from 'mdbreact';
// import { Redirect } from "react-router";
// import { Route, withRouter, useHistory } from 'react-router-dom';
// import { getSearch } from "../../Actions/ApisActions"
// // import './Search.scss'

// function Search(props) {
//     const [name, setName] = useState("");
//     const history = useHistory()

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(name)
//         props.getSearch(name);
//         history.push('/searchView')

//     }
//     return (
//         <div>
//         <div class="recherche-form w3-hide-small">
//             <div class="containe">
//                 <input type="text" placeholder="Search..."/>
//                 <div class="search"></div>
//             </div>
//             <form onSubmit={handleSubmit} class="bar_searc" style={{ marginTop: "20px" }}>
            
//                 <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Search' />
                
//                 <button type="submit" class="bar_search fa fa-search w3-text-deep-orange w3-white w3-border w3-border-white">
                
//                 </button>
//             </form>
//         </div>
//          <form onSubmit={handleSubmit} className='input-group md-form form-sm form-2 pl-0 w3-hide-large w3-hide-medium'>        
//              <input
//                  className='form-control my-0 py-1 red-border'
//                  type='text'
//                  value={name} 
//                  onChange={e => setName(e.target.value)}
//                  placeholder='Search'
//                  aria-label='Search' />
//              <div className='input-group-append'>
//                  <span>                                         
//                      <button  className='input-group-text w3-deep-orange' id='basic-text1' type="submit"><MDBIcon icon='search' className='w3-text-white'/></button>
//                  </span>
//              </div>
//          </form>
//          </div>
//     );
// }
// export default connect(null, { getSearch })(Search)