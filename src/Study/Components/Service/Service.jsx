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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export default function Service () {
    const classes = useStyles();
     
    return (
      <div>
          
          <MDBContainer>
             <h1 className="w3-center w3-text-blue"><b>NOS SERVICES</b></h1>
             <div className={classes.root}>
                <Grid container spacing={3}>
                   
                    <Grid item xs={12} sm={6}>
                       <Paper className={classes.paper}>
                       <h2 className="w3-blue"><b>FACILITATION VISA</b></h2>
                           <h4 className="w3-text-blue">Voyager à l’étranger en toute quiétude résulte
                            d’un certain nombre d’obligations notamment
                            posséder d’un visa d’entrée ou selon la
                            circonstance business, études, travail. Selon
                            chaque cas, nous offrons les services de
                            facilitation de visa dans le respect du temps et
                            le p
                           </h4>
                          
                       </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <Paper className={classes.paper}>
                           <h2 className="w3-blue"><b>RESERVATION DES VOLS</b></h2>
                           <h4 className="w3-text-blue">Nous offrons la possibilité à notre clientèle de
                            pouvoir réserver, confirmer et opérer des
                            changements sur des vols sur toutes les
                            destinations possibles à travers le Pays ainsi que
                            dans le reste du monde. Nous conseillons et
                            accompagnons notre clientèle à obtenir des
                            voyages avec un rapport qualité/prix meilleur.
                            </h4>
                       </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <Paper className={classes.paper}>
                           <h2 className="w3-blue"><b>RESERVATION VOITURE</b></h2>
                           <h4 className="w3-text-blue">
                           Organiser ses déplacements pendant son
                            voyage n’est pas chose facile, nous facilitons la
                            mobilité de nos passagers au départ, à l’arrive et
                            pendant les séjours dans un confort agréable,
                            nous proposons plusieurs types des standards des
                            véhicules selon le besoin et les circonstances.
                           </h4>
                       </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <Paper className={classes.paper}>
                           <h2 className="w3-blue"><b>RESERVATION HOTEL</b></h2>
                           <h4 className="w3-text-blue">Quoi de plus agréable pendant un voyage
                            d’être héberger dans un établissement
                            répondant aux normes ? c’est dans cette
                            optique que grâce à notre vaste réseau des
                            partenaires hôteliers nous offrons à notre
                            clientèle des hébergements de tout type en
                            fonction du besoin.
                            </h4>
                       </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <Paper className={classes.paper}>
                       <h2 className="w3-blue"><b>TOURS OPERATEUR</b></h2>
                           <h4 className="w3-text-blue">
                           Nous offrons différents types de pack tourisme sur
                            plusieurs destinations et en fonction du budget
                            du client, nous conseillons et accompagnons nos
                            clients depuis le choix de leurs destinations
                            jusqu’à la matérialisation de leurs plaisir
                            touristique.
                           </h4> 
                       </Paper>
                    </Grid>                   
                </Grid>
            </div>
          </MDBContainer>
      </div>
    ) 
}
