import React from 'react';
import { connect } from "react-redux"
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ratingCours } from"../../Actions/ApisActions"
import { MDBBtn } from "mdbreact"

 function SimpleRating(props) {
  const [value, setValue] = React.useState(2);

const ratings = () =>{
  // console.log(props.idCour)
  
// console.log( {
//   course: props.idCour,
//   cotation: value
// })
  props.ratingCours( {
    course: props.idCour,
    cotation: value
 })
}

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Veuillez noté le cours svp</Typography>
        <Rating size="large"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
         <MDBBtn color='deep-orange' onClick={ratings}>
            Envoyer
         </MDBBtn>
      </Box>
     
    </div>
  );
} 
export default connect(null, {ratingCours})(SimpleRating)