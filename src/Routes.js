import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class Router extends Component {
    render() {
        return( 
        <BrowserRouter>
            <Switch>
            <Route  exact path="/" component={Login} />
            <Route  path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
         )}

}

const PrivateRoute = ({component : Component , login , ...rest}) => {
    return(

    <Route 
      {...rest}
      render= {
          (props) => login ? 
              <Component {...props} /> :
               <Redirect to="/" />
             }
    />
    )
}

export default Router;