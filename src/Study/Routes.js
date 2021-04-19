import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
 
import NotFound from "../assets/js_logo/Error-404.png"

// const LoginForm = lazy(() => import('./Components/Auth/Login/login'));
// const RegisterForm = lazy(() => import('./Components/Auth/Register/register'));
const Acceuil = lazy(() => import('./Components/Acceuil/Acceuil'));
const Personnels = lazy(() => import('./Components/Personnels/Personnels'));
const Service = lazy(() => import('./Components/Service/Service'));
const Apropos = lazy(() => import('./Components/Apropos/Apropos'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

const Routes = () => {

  // const PrivateRoute = ({ component: Component, ...rest }) =>

  //   (
  //     <Route {...rest} render={props =>
  //       (
  //         localStorage.getItem('user') ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
  //       )} />
  //   );


  return (

    <Switch>
      {/* <Route exact path='/sign-in' component={LoginForm} />
      <Route path="/register" exact strict component={RegisterForm} />
       */}
      <Route exact path="/" component={Acceuil} />     
      <Route exact path="/service" component={Service} />
      <Route exact path="/personnels" component={Personnels} />
      <Route exact path="/apropos" component={Apropos} />
      <Route exact path="/contact" component={Contact} />
      <Route
        render={function () {
          return <div className="w3-center">
            <img  src={NotFound} alt="Norway" style={{ width: "100%" }} className="w3-hide-large w3-hide-medium"/>
            <img  src={NotFound} alt="Norway" style={{ width: "70%" }} className="w3-hide-small"/>
            </div>;
        }}
      />
    </Switch>
  );   
}

export default Routes;

